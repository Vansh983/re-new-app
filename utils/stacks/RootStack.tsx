import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";

// export type RootStackParams = {
//     Landing,
// }

const RootBottomStack = createBottomTabNavigator();

const RootStack = () => {
  return (
    <RootBottomStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderRadius: 30, width: "95%" },
      }}
    >
      <RootBottomStack.Screen
        options={{
          //   tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#333", fontSize: 14 },
        }}
        name="Home"
        component={Home}
      />
      <RootBottomStack.Screen
        options={{
          //   tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#333", fontSize: 14 },
        }}
        name="Feed"
        component={Home}
      />
      <RootBottomStack.Screen
        options={{
          tabBarLabelStyle: { color: "#333", fontSize: 14 },
        }}
        name="Profile"
        component={Home}
      />
    </RootBottomStack.Navigator>
  );
};

export default RootStack;
