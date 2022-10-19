import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import { BottomDrawer, Button, Icons } from "@ledgerhq/native-ui";
import { useDispatch, useSelector } from "react-redux";
import { decodeNftId } from "@ledgerhq/live-common/lib/nft/nftId";
import { track, TrackScreen } from "../../analytics";
import { NavigatorName, ScreenName } from "../../const";
import { hideNftCollection } from "../../actions/settings";
import { accountSelector } from "../../reducers/accounts";

type Props = {
  nftId?: string;
  nftContract?: string;
  collection?: string;
  isOpened: boolean;
  onClose: () => void;
};
const HideNftDrawer = ({
  nftId,
  nftContract,
  collection,
  isOpened,
  onClose,
}: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { accountId } = decodeNftId(nftId ?? "");
  const account = useSelector(state => accountSelector(state, { accountId }));

  const onClickContinue = useCallback(() => {
    track("button_clicked", {
      button: "Continue",
      drawer: "HideCollectionModal",
    });

    dispatch(hideNftCollection(`${account?.id}|${nftContract}`));
    onClose();
    navigation.navigate(NavigatorName.WalletTab, {
      screen: ScreenName.NftGallery,
    });
  }, [account?.id, dispatch, navigation, nftContract, onClose]);

  const onPressClose = useCallback(() => {
    track("button_clicked", {
      button: "Close 'x'",
      drawer: "HideCollectionModal",
    });
    onClose();
  }, [onClose]);

  return (
    <BottomDrawer
      testId="HideCollectionModal"
      isOpen={isOpened}
      onClose={onPressClose}
      Icon={Icons.EyeNoneMedium}
      title={t("wallet.nftGallery.hideNftModal.title")}
      description={t("wallet.nftGallery.hideNftModal.desc", {
        collectionName: collection,
      })}
    >
      <TrackScreen category="Hide collection Confirmation" type="drawer" />

      <Button
        type="main"
        size="large"
        alignSelf="stretch"
        onPress={onClickContinue}
        mt={4}
        mb={2}
      >
        {t("wallet.nftGallery.hideNftModal.cta")}
      </Button>

      <Button
        type="default"
        size="large"
        alignSelf="stretch"
        onPress={onPressClose}
      >
        {t("common.cancel")}
      </Button>
    </BottomDrawer>
  );
};

export default memo(HideNftDrawer);
