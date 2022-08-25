import React, { memo, useMemo, useCallback } from "react";
import { SectionList } from "react-native";
import { Button, Flex } from "@ledgerhq/native-ui";
import { SectionBase } from "react-native/Libraries/Lists/SectionList";
import { AccountLikeArray, Operation } from "@ledgerhq/live-common/types/index";
import { groupAccountsOperationsByDay } from "@ledgerhq/live-common/account/groupOperations";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import OperationRow from "../../components/OperationRow";
import SectionHeader from "../../components/SectionHeader";
import { withDiscreetMode } from "../../context/DiscreetModeContext";
import { NavigatorName, ScreenName } from "../../const";
import { parentAccountSelector } from "../../reducers/accounts";
import { track } from "../../analytics";
import { useCurrentRouteName } from "../../helpers/routeHooks";

type Props = {
  accounts: AccountLikeArray;
};

const NB_OPERATIONS_TO_DISPLAY = 3;

const keyExtractor = (operation: Operation) => operation.id;

const renderSectionHeader = ({ section }: { section: { day: Date } }) => (
  <SectionHeader section={section} />
);

const OperationsHistory = ({ accounts }: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const currentScreen = useCurrentRouteName();
  const { sections, completed } = useMemo(
    () =>
      groupAccountsOperationsByDay(accounts, {
        count: NB_OPERATIONS_TO_DISPLAY,
        withSubAccounts: true,
      }),
    [accounts],
  );

  const renderItem = useCallback(
    ({
      item,
      index,
      section,
    }: {
      item: Operation;
      index: number;
      section: SectionBase<any>;
    }) => {
      const account = accounts.find(a => a.id === item.accountId);
      const parentAccount = useSelector(state =>
        parentAccountSelector(state, { account }),
      );

      if (!account) return null;

      return (
        <OperationRow
          operation={item}
          parentAccount={parentAccount}
          account={account}
          multipleAccounts={accounts.length > 1}
          isLast={section.data.length - 1 === index}
        />
      );
    },
    [accounts],
  );

  const goToAnalyticsOperations = useCallback(() => {
    track("button_clicked", {
      button: "See All",
      screen: currentScreen,
    });
    navigation.navigate(NavigatorName.Analytics, {
      screen: ScreenName.AnalyticsOperations,
      params: {
        accountsIds: accounts.map(account => account.id),
      },
    });
  }, [navigation, accounts]);

  return (
    <Flex flex={1}>
      <SectionList
        sections={sections}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
      {!completed ? (
        <Button
          type="shade"
          size="large"
          outline
          mt={6}
          onPress={goToAnalyticsOperations}
        >
          {t("common.seeAll")}
        </Button>
      ) : null}
    </Flex>
  );
};

export default withDiscreetMode(memo<Props>(OperationsHistory));