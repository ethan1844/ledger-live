import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components/native";
import { Box, Text } from "@ledgerhq/native-ui";
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, View } from "react-native";
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

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test1" component={Portfolio} />
      <Tab.Screen
        name="Test2"
        component={() => <Box bg={"red"} height={200} width={400} />}
      />
    </Tab.Navigator>
  );
}

export default function PortfolioNavigator() {
  const { colors } = useTheme();
  const stackNavigationConfig = useMemo(
    () => getStackNavigatorConfig(colors, true),
    [colors],
  );
  const readOnlyModeEnabled = useSelector(readOnlyModeEnabledSelector);
  const accounts = useSelector(accountsSelector);

  const currentPositionY = useSharedValue(0);
  const handleScroll = useAnimatedScrollHandler(event => {
    currentPositionY.value = event.contentOffset.y;
  });

  return (
    <View style={{ flex: 1 }} onScroll={handleScroll}>
      <Text>sdsqqsddsqdsqdsq</Text>
      <BackgroundGradient
        currentPositionY={currentPositionY}
        graphCardEndPosition={300}
      />
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        onScroll={handleScroll}
        nestedScrollEnabled={true}
      >
        <Stack.Navigator
          screenOptions={stackNavigationConfig}
          initialRouteName={ScreenName.Portfolio}
          backBehavior={"initialRoute"}
        >
          <Stack.Screen
            name={ScreenName.Portfolio}
            component={App}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={NavigatorName.PortfolioAccounts}
            component={AccountsNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ScrollView>
      <Header
      // currentPositionY={currentPositionY}
      // graphCardEndPosition={graphCardEndPosition}
      // counterValueCurrency={counterValueCurrency}
      // portfolio={portfolio}
      // hidePortfolio={areAccountsEmpty}
      />
    </View>
  );
}

const Stack = createStackNavigator();
