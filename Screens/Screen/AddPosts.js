import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";
import { db, auth } from "../../Firebase/Firebase";

import firebase from "firebase";
import ImageUpload from "../ImageUploader/ImageUpload";
const AddPosts = () => {
  const [content, setContent] = useState("");

  const addPosts = () => {
    db.collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      content: content,
      username: auth.currentUser.displayName,
    });
    setContent("");
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 50, paddingHorizontal: 10 }}>
        <Input
          placeholder="Enter your tweet"
          onChangeText={(text) => setContent(text)}
          value={content}
          bottomHelp
          placeholderTextColor="#4F8EC9"
          style={styles.input}
        />
        <ImageUpload />
        <Button onPress={addPosts} color="info" title="Add Post" />
      </View>
    </SafeAreaView>
  );
};

export default AddPosts;

const styles = StyleSheet.create({
  input: {
    height: 100,
  },
});
