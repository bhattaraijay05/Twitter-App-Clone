import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../Firebase/Firebase";
const Profile = () => {
  return (
    <SafeAreaView>
      <Text>This is the Profile Screen</Text>
      <Button onPress={() => auth.signOut()} title={"Logout"} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
