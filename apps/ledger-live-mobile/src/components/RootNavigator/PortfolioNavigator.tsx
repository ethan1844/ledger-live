import React, { createContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import styled, { useTheme } from "styled-components/native";
import { Box, Text } from "@ledgerhq/native-ui";
import {
  debug,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { ScrollView, View } from "react-native";
import { TabsContainer } from "@ledgerhq/native-ui/components/Tabs/TemplateTabs";
import { ChipTab } from "@ledgerhq/native-ui/components/Tabs/Chip";
import { NavigatorName, ScreenName } from "../../const";
import Portfolio from "../../screens/Portfolio";
// eslint-disable-next-line import/no-cycle
import ReadOnlyPortfolio from "../../screens/Portfolio/ReadOnly";
// eslint-disable-next-line import/no-cycle
import AccountsNavigator from "./AccountsNavigator";
import { getStackNavigatorConfig } from "../../navigation/navigatorConfig";
import { readOnlyModeEnabledSelector } from "../../reducers/settings";
import { accountsSelector } from "../../reducers/accounts";
import BackgroundGradient from "../BackgroundGradient";
import { Flex } from "../../../../../libs/ui/packages/native/lib";
import Header from "../../screens/Portfolio/Header";

const Tab = createMaterialTopTabNavigator();

const TabBarContainer = styled(Flex)`
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.palette.neutral.c40};
  background-color: transparent;
`;

function TabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
  return (
    <TabBarContainer
      paddingLeft={4}
      paddingRight={4}
      paddingBottom={4}
      paddingTop={4}
    >
      <TabsContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title;

          const isActive = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <ChipTab
              key={index}
              label={label || "Test"}
              isActive={isActive}
              index={index}
              onPress={onPress}
            />
          );
        })}
      </TabsContainer>
    </TabBarContainer>
  );
}

function App() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarStyle: { backgroundColor: "red" },
      }}
      style={{ backgroundColor: "transparent" }}
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      tabBarOptions={{ style: { backgroundColor: "transparent" } }}
      lazy
      lazyPlaceholder={() => {
        console.log("PlaceHolderred");
        return <Box bg={"green"} height={200} width={400} />;
      }}
    >
      <Tab.Screen name="Test1" component={Portfolio} />
      <Tab.Screen
        name="Test2"
        component={() => {
          console.log("Test2red");
          return <Box bg={"red"} height={200} width={400} />;
        }}
      />
    </Tab.Navigator>
  );
}

export const ScrollPositionContext = createContext(null);

export default function PortfolioNavigator() {
  const { colors } = useTheme();
  const stackNavigationConfig = useMemo(
    () => getStackNavigatorConfig(colors, true),
    [colors],
  );
  const readOnlyModeEnabled = useSelector(readOnlyModeEnabledSelector);
  const accounts = useSelector(accountsSelector);

  const currentPositionY = useSharedValue(0);

  return (
    <ScrollPositionContext.Provider value={currentPositionY}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>sdsqqsddsqdsqdsq</Text>
        <BackgroundGradient
          currentPositionY={currentPositionY}
          graphCardEndPosition={0}
        />
        <Text>azazazaz</Text>
        {/* <Box bg={"transparent"} height={200} width={400} /> */}
        <Header
        // currentPositionY={currentPositionY}
        // graphCardEndPosition={graphCardEndPosition}
        // counterValueCurrency={counterValueCurrency}
        // portfolio={portfolio}
        // hidePortfolio={areAccountsEmpty}
        />

        <Stack.Navigator
          screenOptions={stackNavigationConfig}
          initialRouteName={ScreenName.Portfolio}
          backBehavior={"initialRoute"}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            overlayStyle: { backgroundColor: "transparent" },
            presentation: "transparentModal",
          }}
        >
          <Stack.Screen
            name={ScreenName.Portfolio}
            component={App}
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: "transparent" },
              overlayStyle: { backgroundColor: "transparent" },
              presentation: "transparentModal",
            }}
          />
          <Stack.Screen
            name={NavigatorName.PortfolioAccounts}
            component={AccountsNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </ScrollPositionContext.Provider>
  );
}

const Stack = createStackNavigator();
