import React from "react";

//importing navigation components
import { NavigationContainer } from "@react-navigation/native";
import TabBarNavigation from "./navigation/TabBarNavigation";
import StackNavigator from "./navigation/StackNavigator";


//nesting navigators
function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

function Home() {
  return <TabBarNavigation />;
}

export default App;
