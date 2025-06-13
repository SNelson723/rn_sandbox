import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import StatsScreen from "./src/screens/StatsScreen";
import DogsScreen from "./src/screens/DogsScreen";

import { store } from "./src/store";
import { Provider } from "react-redux";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Use this for stack navigation for nested screens
// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Stats" component={StatsScreen} />
    <Tab.Screen name="Dogs" component={DogsScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
