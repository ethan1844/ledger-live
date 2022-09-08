import React, { useEffect, useCallback, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { NativeModules } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Device } from "@ledgerhq/live-common/hw/actions/types";
import { Button, Icons } from "@ledgerhq/native-ui";
import { DeviceInfo } from "@ledgerhq/types-live";
import { BluetoothNotSupportedError } from "@ledgerhq/live-common/errors";
import { useFeature } from "@ledgerhq/live-common/featureFlags/index";
import {
  DisconnectedDevice,
  DisconnectedDeviceDuringOperation,
  WebsocketConnectionError,
} from "@ledgerhq/errors";
import {
  FwUpdateBackgroundEvent,
  nextBackgroundEventSelector,
} from "../../reducers/appstate";
import {
  clearBackgroundEvents,
  dequeueBackgroundEvent,
} from "../../actions/appstate";
import BackgroundRunnerService from "../../../services/BackgroundRunnerService";
import BottomModal from "../BottomModal";
import GenericErrorView from "../GenericErrorView";
import useLatestFirmware from "../../hooks/useLatestFirmware";
import ConfirmRecoveryStep from "./ConfirmRecoveryStep";
import FlashMcuStep from "./FlashMcuStep";
import FirmwareUpdatedStep from "./FirmwareUpdatedStep";
import ConfirmPinStep from "./ConfirmPinStep";
import ConfirmUpdateStep from "./ConfirmUpdateStep";
import DownloadingUpdateStep from "./DownloadingUpdateStep";
import DeviceLanguageStep from "./DeviceLanguageStep";
import { track } from "../../analytics";
import { FwUpdateForegroundEvent } from "./types";

type Props = {
  device: Device;
  deviceInfo: DeviceInfo;
  isOpen: boolean;
  onClose: (restoreApps?: boolean) => void;
  hasAppsToRestore: boolean;
};

type FwUpdateStep =
  | "confirmRecoveryBackup"
  | "downloadingUpdate"
  | "error"
  | "flashingMcu"
  | "confirmPin"
  | "confirmUpdate"
  | "firmwareUpdated"
  | "promptLanguageChange";

type FwUpdateState = {
  step: FwUpdateStep;
  progress?: number;
  error?: Error;
  installing?: string | null;
  updatedDeviceInfo?: DeviceInfo;
};

export default function FirmwareUpdate({
  device,
  deviceInfo,
  onClose,
  isOpen,
  hasAppsToRestore,
}: Props) {
  const nextBackgroundEvent = useSelector(nextBackgroundEventSelector);
  const dispatch = useDispatch();
  const latestFirmware = useLatestFirmware(deviceInfo);
  const bleFwUpdateFeatureFlag = useFeature("bleFwUpdateFeatureFlag");

  const { t } = useTranslation();
  const maybeBleError = useCallback(
    (wired: boolean) => {
      if (!wired && !bleFwUpdateFeatureFlag?.enabled) {
        return new (BluetoothNotSupportedError as ErrorConstructor)();
      }
      return undefined;
    },
    [bleFwUpdateFeatureFlag],
  );

  // reducer for the firmware update state machine
  const fwUpdateStateReducer = useCallback(
    (
      state: FwUpdateState,
      event: FwUpdateBackgroundEvent | FwUpdateForegroundEvent,
    ): FwUpdateState => {
      switch (event.type) {
        case "confirmPin":
          return { step: "confirmPin" };
        case "downloadingUpdate":
          if (event.progress && device.wired) {
            NativeModules.BackgroundRunner.update(
              Math.round(event.progress * 100),
              t("FirmwareUpdate.Notifications.installing", {
                progress: Math.round(event.progress * 100),
              }),
            );
          }
          return { step: "downloadingUpdate", progress: event.progress };
        case "confirmUpdate":
          if (device.wired) {
            NativeModules.BackgroundRunner.requireUserAction(
              t("FirmwareUpdate.Notifications.confirmOnDevice"),
            );
          }
          return { step: "confirmUpdate" };
        case "flashingMcu":
          return {
            step: "flashingMcu",
            progress: event.progress,
            installing: event.installing,
          };
        case "firmwareUpdated":
          return {
            step: "promptLanguageChange",
            updatedDeviceInfo: event.updatedDeviceInfo,
          };
        case "languagePromptDismissed":
          return { step: "firmwareUpdated" };
        case "error":
          return { step: "error", error: event.error };
        case "reset":
          return {
            step: "confirmRecoveryBackup",
            progress: undefined,
            error: maybeBleError(event?.wired),
            installing: undefined,
          };
        default:
          return { ...state };
      }
    },
    [device.wired, maybeBleError, t],
  );

  const [state, dispatchEvent] = useReducer(fwUpdateStateReducer, {
    step: "confirmRecoveryBackup",
    progress: undefined,
    error: maybeBleError(device.wired),
    installing: undefined,
  });

  const { step, progress, error, installing, updatedDeviceInfo } = state;

  const onReset = useCallback(() => {
    dispatchEvent({ type: "reset", wired: device.wired });
    dispatch(clearBackgroundEvents());
    if (device.wired) NativeModules.BackgroundRunner.stop();
  }, [device.wired, dispatch]);

  // only allow closing of the modal when the update is not in an intermediate step
  const canClose =
    step === "confirmRecoveryBackup" ||
    step === "firmwareUpdated" ||
    step === "error" ||
    step === "confirmPin" ||
    step === "promptLanguageChange";

  const onTryClose = useCallback(
    (restoreApps: boolean) => {
      if (canClose) {
        onClose(restoreApps);
      }
    },
    [canClose, onClose],
  );

  const onCloseAndReinstall = useCallback(() => onTryClose(true), [onTryClose]);
  const onCloseSilently = useCallback(() => onTryClose(false), [onTryClose]);

  useEffect(() => {
    // reset the state whenever we re-open the modal
    if (isOpen) {
      onReset();
    }
  }, [isOpen, onReset]);

  useEffect(() => {
    if (!nextBackgroundEvent) return;
    dispatchEvent(nextBackgroundEvent);
    dispatch(dequeueBackgroundEvent());
  }, [nextBackgroundEvent, dispatch, dispatchEvent]);

  useEffect(() => {
    if (step === "error") {
      track("FirmwareUpdateError", error ?? null);
    }
  }, [error, step]);

  const launchUpdate = useCallback(() => {
    if (latestFirmware) {
      if (device.wired) {
        NativeModules.BackgroundRunner.start(
          device.deviceId,
          JSON.stringify(latestFirmware),
          t("FirmwareUpdate.Notifications.preparingUpdate"),
        );
      } else {
        // The wired firmware update goes through NativeModules.BackgroundRunner which emits events
        // by adding them to the store from a headlessJS instance, in the BLE case we do the same
        // but invoking the code explicitly from here ↓ instead of from the native side.
        BackgroundRunnerService({
          deviceId: device.deviceId,
          firmwareSerializedJson: JSON.stringify(latestFirmware),
          backgroundMode: false,
        });
      }
      dispatchEvent({ type: "downloadingUpdate", progress: 0 });
    }
  }, [device.deviceId, device.wired, latestFirmware, t]);

  const firmwareVersion = latestFirmware?.final?.name ?? "";

  return (
    <BottomModal
      id="DeviceActionModal"
      noCloseButton={!canClose}
      isOpened={isOpen}
      onClose={onCloseSilently}
      onModalHide={onCloseSilently}
    >
      {step === "confirmRecoveryBackup" && (
        <ConfirmRecoveryStep
          onContinue={launchUpdate}
          firmwareVersion={firmwareVersion}
          firmwareNotes={latestFirmware?.osu?.notes}
          device={device}
        />
      )}
      {step === "flashingMcu" && (
        <FlashMcuStep progress={progress} installing={installing} />
      )}
      {step === "promptLanguageChange" && (
        <DeviceLanguageStep
          dispatchEvent={dispatchEvent}
          updatedDeviceInfo={updatedDeviceInfo}
          oldDeviceInfo={deviceInfo}
          device={device}
        />
      )}
      {step === "firmwareUpdated" && (
        <FirmwareUpdatedStep onReinstallApps={onCloseAndReinstall} />
      )}
      {step === "error" && (
        <>
          <GenericErrorView
            error={error as Error}
            withDescription={
              error instanceof DisconnectedDevice ||
              error instanceof DisconnectedDeviceDuringOperation
            }
            hasExportLogButton={!(error instanceof BluetoothNotSupportedError)}
            Icon={
              error instanceof BluetoothNotSupportedError
                ? Icons.UsbMedium
                : undefined
            }
            iconColor={
              error instanceof BluetoothNotSupportedError
                ? "neutral.c100"
                : undefined
            }
          />
          {!(
            error instanceof BluetoothNotSupportedError ||
            error instanceof WebsocketConnectionError
          ) &&
            hasAppsToRestore && (
              <Button
                type="main"
                alignSelf="stretch"
                mt={5}
                onPress={onCloseAndReinstall}
              >
                {t("FirmwareUpdate.reinstallApps")}
              </Button>
            )}
        </>
      )}
      {step === "confirmPin" && <ConfirmPinStep device={device} />}
      {step === "confirmUpdate" && (
        <ConfirmUpdateStep
          device={device}
          deviceInfo={deviceInfo}
          latestFirmware={latestFirmware}
        />
      )}
      {step === "downloadingUpdate" && (
        <DownloadingUpdateStep progress={progress} />
      )}
    </BottomModal>
  );
}
