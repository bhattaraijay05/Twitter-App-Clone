import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../Firebase/Firebase";
import Drawers from "../Navigations/Drawers";
import StackAuth from "../Navigations/StackAuth";

const WelcomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // userlogged in
        console.log(authUser);
        setUser(authUser);
      } else {
        // userlogged out
        setUser(null);
        console.log("User is logged out");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return <>{user ? <Drawers /> : <StackAuth />}</>;
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
