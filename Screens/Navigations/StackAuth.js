import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
const Stack = createStackNavigator();

const StackAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackAuth;

const styles = StyleSheet.create({});
