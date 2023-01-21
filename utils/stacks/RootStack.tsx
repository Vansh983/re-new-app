import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../../screens/Feed";
import Profile from "../../screens/Profile";
import TasksScreenStack from "./TasksStack";

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
        tabBarStyle: {
          borderRadius: 30,
          width: "95%",
          marginLeft: "2.5%",
          paddingTop: 10,
          paddingBottom: 10,
          height: 65,
        },
        tabBarShowLabel: false,
      }}
    >
      <RootBottomStack.Screen
        options={{
          tabBarIcon: ({}) => (
            <Ionicons name="home-outline" size={30} color="#666" />
          ),
        }}
        name="Home"
        component={TasksScreenStack}
      />
      <RootBottomStack.Screen
        options={{
          tabBarIcon: ({}) => (
            <Ionicons name="search-outline" size={30} color="#666" />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <RootBottomStack.Screen
        options={{
          tabBarIcon: ({}) => (
            <Ionicons name="person-outline" size={30} color="#666" />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </RootBottomStack.Navigator>
  );
};

export default RootStack;
