import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Feed from "../Home/Feed";
import FeedDetails from "../Home/FeedDetails";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import FetchPosts from "../Posts/FetchPosts";
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feeds"
        component={Feed}
        options={{
          headerTitle: (
            <MaterialCommunityIcons
              name="twitter"
              color={colors.headerIconColor}
              size={29}
            />
          ),
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.headerText,
          headerTitleStyle: {
            alignSelf: "center",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <MaterialCommunityIcons
                name="menu"
                color={colors.headerIconColor}
                size={29}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="star"
                color={colors.headerIconColor}
                size={29}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="FeedDetails"
        component={FeedDetails}
        options={{
          headerTitle: "Tweets",
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.headerText,
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
