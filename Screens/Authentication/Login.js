import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../Firebase/Firebase";
import SignUp from "./SignUp";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const login = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Enter Email and Password to Login");
    } else {
      auth.signInWithEmailAndPassword(email, password).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
    }
  };

  return (
    <SafeAreaView style={styles.loginScreen}>
      <View>
        <Input
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
      </View>
      <View>
        <Input
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Don't have an account.</Text>
        <TouchableOpacity style={{ color: "blue" }} onPress={navigateToSignUp}>
          <Text style={{ color: "blue" }}> Signup Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logInButton}>
        <Button onPress={login} title={"Login"} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 40,
  },
  logInButton: {
    marginTop: 50,
  },
});
