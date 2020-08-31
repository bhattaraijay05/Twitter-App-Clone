import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../Firebase/Firebase";
import Drawers from "../Navigations/Drawers";
import Login from "./Login";

import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const register = () => {
    if (email === "" || password === "" || username === "") {
      Alert.alert("Error", "Please Enter all the details to register");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: username,
          });
        })
        .catch((error) => {
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
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          leftIcon={<Feather name="at-sign" size={24} color="black" />}
        />
      </View>

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
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Already have an account. </Text>
        <TouchableOpacity style={{ color: "tomato" }} onPress={navigateToLogin}>
          <Text style={{ color: "blue" }}>Login Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logInButton}>
        <Button onPress={register} title={"SignUp"} />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
