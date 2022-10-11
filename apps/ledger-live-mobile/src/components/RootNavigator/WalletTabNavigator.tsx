import React, { createContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainerEventMap } from "@react-navigation/native";
import { Box, Flex, Text } from "@ledgerhq/native-ui";
import { useSharedValue } from "react-native-reanimated";
import { Animated, FlatList, View, StyleSheet } from "react-native";
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
import diffClamp = Animated.diffClamp;

export const ScrollPositionContext = createContext(null);

const WalletTab = createMaterialTopTabNavigator();

const tabBarOptions = (props: MaterialTopTabBarProps) => (
  <WalletTabNavigatorTabBar {...props} />
);

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694qsd3da1-471f-bd96-145571e29d72",
    title: "Thiqsddsqem",
  },
  {
    id: "58694a0fsqd-471f-bd96-145571e29d72",
    title: "Thqsddsqem",
  },
  {
    id: "58694aqds-471f-bd96-145571e29d72",
    title: "Thsqddsqem",
  },
  {
    id: "aez-471f-bd96-145571e29d72",
    title: "Thsqdddsqdsqsqem",
  },
  {
    id: "zaezaea-471f-bd96-145571e29d72",
    title: "dsqdsqdsq",
  },
  {
    id: "58694aqds-471f-bd96-145571e29d72",
    title: "qdsdsq",
  },
  {
    id: "58694aqdaazefggg29d72",
    title: "v qsdqsdqsdazdad",
  },
  {
    id: "5869dazza-471f-baaz45571e29d72",
    title: "dsqdsq",
  },
  {
    id: "5azdadzdzas-471f-bd96-145571e29d72",
    title: "dsqqsddsqfr",
  },
  {
    id: "58694aqddsqsqd96-145571e29d72",
    title: "qdsdsq",
  },
  {
    id: "sqdqssqd-471f-bdaa71e29d72",
    title: "dsq ",
  },
  {
    id: "5qsdsqd-471f-bd96-145571e29d72",
    title: "aaaa",
  },
  {
    id: "58694aqqssqd2",
    title: "sdqsd",
  },
];

const Item = ({ title }) => (
  <View
    style={{
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}
  >
    <Text>{title}</Text>
  </View>
);

const getCloser = (value, checkOne, checkTwo) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

const headerHeight = 56 * 2;

export default function WalletTabNavigator() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const readOnlyModeEnabled = useSelector(readOnlyModeEnabledSelector);
  const accounts = useSelector(accountsSelector);
  const lastVisitedTab = useSelector(walletTabNavigatorLastVisitedTabSelector);

  const renderItem = ({ item }) => <Item title={item.title} />;

  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });

  const translateYNumber = useRef();

  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (ref.current) {
        ref.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };

  return (
    <>
      {/* <Box pt={10} pb={5} px={6}> */}
      {/*  <Header hidePortfolio={false} /> */}
      {/* </Box> */}
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <Flex height={'56px'} alignItems={'center'} justifyContent={'center'} px={6}><Header hidePortfolio={false} /></Flex>
      </Animated.View>
      <Animated.FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ref={ref}
        onScroll={handleScroll}
        contentContainerStyle={{ paddingTop: headerHeight }}
        onMomentumScrollEnd={handleSnap}
      />
      <WalletTab.Navigator
        initialRouteName={lastVisitedTab}
        tabBar={tabBarOptions}
        style={{ backgroundColor: "transparent" }}
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
              : Portfolio
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
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    backgroundColor: "#1c1c1c",
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1,
  },
  subHeader: {
    height: headerHeight / 2,
    width: "100%",
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
