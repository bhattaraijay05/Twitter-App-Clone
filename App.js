import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawers from "./Screens/Navigations/Drawers";
import Login from "./Screens/Authentication/Login";
import SignUp from "./Screens/Authentication/SignUp";
import StackAuth from "./Screens/Navigations/StackAuth";
import { auth } from "./Firebase/Firebase";
import { MenuProvider } from "react-native-popup-menu";
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <WelcomeScreen />
      </NavigationContainer>
    </MenuProvider>
  );
}
