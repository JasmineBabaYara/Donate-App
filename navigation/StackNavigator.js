import React from "react";

//importing navigation components
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importing screens
import TabBarNavigation from "./TabBarNavigation";
import InformationScreen from "../screeens/SubScreens/InformationScreen";
// import DonationScreen from "../screeens/SubScreens/DonationScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={TabBarNavigation}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TabBarNavigation" component={TabBarNavigation} />
      <Stack.Screen name="InformationScreen" component={InformationScreen}  />
      {/* <Stack.Screen name="DonationScreen" component={DonationScreen}  /> */}
    </Stack.Navigator>
  );
}
