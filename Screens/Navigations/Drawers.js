import React from "react";
import { StyleSheet, useWindowDimensions, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTab";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import StackAuth from "./StackAuth";
import colors from "../config/colors";
import Logout from "../Authentication/Logout";
import { auth } from "../../Firebase/Firebase";
import Profile from "../Screen/Profile";
const Drawer = createDrawerNavigator();

const Drawers = () => {
  return (
    <Drawer.Navigator
      overlayColor={0.6}
      drawerContentOptions={{
        activeTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Feeds"
        component={BottomTab}
        options={{
          drawerLabel: "Feeds",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={colors.drawerIconColor}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Picture"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={colors.drawerIconColor}
              size={26}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="List"
        component={StackAuth}
        options={{
          drawerLabel: "List",
          drawerIcon: ({ color, size }) => (
            <FontAwesome
              name="list-alt"
              color={colors.drawerIconColor}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        onPress={() => auth.signOut()}
        component={Logout}
        options={{
          drawerLabel: "Logout",
          drawerIcon: ({ color, size }) => (
            <SimpleLineIcons
              name="logout"
              color={colors.drawerIconColor}
              size={26}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default Drawers;

const styles = StyleSheet.create({});
