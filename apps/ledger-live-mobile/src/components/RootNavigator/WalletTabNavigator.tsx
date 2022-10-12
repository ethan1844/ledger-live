import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainerEventMap } from "@react-navigation/native";
import { Box, Text } from "@ledgerhq/native-ui";
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  StickyView,
  useCollapsibleContext,
  withCollapsibleContext,
} from "@r0b0t3d/react-native-collapsible";
import { ScrollView, View } from "react-native";
import { PortalHost, PortalProvider } from "@gorhom/portal";
import { ScreenName } from "../../const";
import Portfolio from "../../screens/Portfolio";
import WalletNftGallery from "../../screens/Nft/WalletNftGallery";
import {
  readOnlyModeEnabledSelector,
  walletTabNavigatorLastVisitedTabSelector,
} from "../../reducers/settings";
import { accountsSelector } from "../../reducers/accounts";
// eslint-disable-next-line import/no-cycle
import ReadOnlyPortfolio from "../../screens/Portfolio/ReadOnly";
import { setWalletTabNavigatorLastVisitedTab } from "../../actions/settings";
import WalletTabNavigatorTabBar from "../WalletTabNavigatorTabBar";
import Header from "../../screens/Portfolio/Header";

const WalletTab = createMaterialTopTabNavigator();

// const tabBarOptions = (props: MaterialTopTabBarProps) => (
//   <WalletTabNavigatorTabBar {...props} />
// );

const tabBarOptions = (props: MaterialTopTabBarProps) => null;

const TestScreen = () => (
  <CollapsibleScrollView
    headerSnappable={false}
    style={{ backgroundColor: "black" }}
  >
    <Box height={300} bg={"blue"} />
    <Box height={300} bg={"green"} />
    <Box height={300} bg={"red"} />
    <Box height={300} bg={"green"} />
    <Box height={300} bg={"purple"} />
  </CollapsibleScrollView>
);

function WalletTabNavigator() {
  const dispatch = useDispatch();
  const readOnlyModeEnabled = useSelector(readOnlyModeEnabledSelector);
  const accounts = useSelector(accountsSelector);
  const lastVisitedTab = useSelector(walletTabNavigatorLastVisitedTabSelector);
  const [isRefreshing, setIsRefreshing] = useState();

  const { t } = useTranslation();

  const {
    collapse, // <-- Collapse header
    expand, // <-- Expand header
    scrollY, // <-- Animated scroll position. In case you need to do some animation in your header or somewhere else
    headerHeight,
  } = useCollapsibleContext();

  console.log("headerHeights", headerHeight);
  console.log("isRefreshing", isRefreshing);

  return (
    <PortalProvider>
      <CollapsibleContainer style={{ flex: 1, backgroundColor: "transparent" }}>
        <CollapsibleHeaderContainer>
          {/* <Box pt={10} px={6} bg={"background.main"}> */}
          {/*  <Header hidePortfolio={false} /> */}
          {/* </Box> */}
          {/* <StickyView> */}
          {/*  <Box pt={5} bg={"background.main"}> */}
          {/*    <PortalHost name="CustomPortalHost" /> */}
          {/*  </Box> */}
          {/* </StickyView> */}
          <Box height={100} bg={"green"} />
          <StickyView>
            <Box height={100} bg={"purple"} />
          </StickyView>
        </CollapsibleHeaderContainer>
        <WalletTab.Navigator
          initialRouteName={lastVisitedTab}
          tabBar={tabBarOptions}
          style={{
            backgroundColor: "transparent",
            overflow: "scroll",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          sceneContainerStyle={{ backgroundColor: "transparent" }}
          tabBarOptions={{ style: { backgroundColor: "transparent" } }}
          screenOptions={{
            lazy: true,
          }}
          screenListeners={{
            state: (e: NavigationContainerEventMap["state"]) => {
              if (
                e?.data?.state?.routeNames &&
                (e?.data?.state?.index || e?.data?.state?.index === 0)
              ) {
                console.log("e.data.state", e.data.state);
                setIsRefreshing(e.data.state);
                dispatch(
                  setWalletTabNavigatorLastVisitedTab(
                    e.data.state.routeNames[e.data.state.index],
                  ),
                );
              }
            },
          }}
        >
          <WalletTab.Screen
            name={ScreenName.Portfolio}
            component={
              readOnlyModeEnabled && accounts.length <= 0
                ? ReadOnlyPortfolio
                : TestScreen
            }
            options={{
              title: t("wallet.tabs.crypto"),
            }}
          />
          <WalletTab.Screen
            name={ScreenName.WalletNftGallery}
            component={WalletNftGallery}
            options={{
              title: t("wallet.tabs.nft"),
            }}
          />
        </WalletTab.Navigator>
      </CollapsibleContainer>
    </PortalProvider>
  );
}

export default withCollapsibleContext(WalletTabNavigator);
