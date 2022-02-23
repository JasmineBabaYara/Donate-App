import React from "react";

//importing navigation component
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importing vector icons
import { Entypo, FontAwesome } from "expo-vector-icons";

//importing screens
import HomeScreen from "../screeens/HomeScreen";
import UserScreen from "../screeens/UserScreen";

const Tab = createBottomTabNavigator();

export default function TabBarNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        tabBarActiveTintColor: " #310062",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          // paddingBottom: 30,
          // paddingTop: 40,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
