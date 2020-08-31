import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Picker, Alert } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";
import colors from "../config/colors";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";

import { db } from "../../Firebase/Firebase";
import FeedDetails from "../Home/FeedDetails";
const Posts = ({ content, id, userName }) => {
  const [numberOfLikes, setNumberOfLikes] = useState([]);
  const [like, setLike] = useState(0);
  const [heartColor, setHeartColor] = useState("black");
  const [heartName, setHeartName] = useState("hearto");
  const deleteItem = () => {
    db.collection("posts").doc(id).delete();
  };

  const likePost = () => {
    if (heartColor === "black") {
      // db.collection("posts").doc(id).collection("likes").add({
      //   like: numberOfLikes,
      // });
      setLike(like + 1);
      setHeartColor("red");
      setHeartName("heart");
    } else if (heartColor === "red") {
      // db.collection("posts").doc(id).collection("likes").doc(id).delete();
      setLike(like - 1);
      setHeartColor("black");
      setHeartName("hearto");
    }
  };

  // useEffect(() => {
  //   db.collection("posts")
  //     .doc(id)
  //     .collection("likes")
  //     .onSnapshot((snapshot) => {
  //       setNumberOfLikes(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //         }))
  //       );
  //     });
  // }, []);

  const number = Math.floor(Math.random() * 10);
  return (
    <View style={styles.posts} onPress={() => Alert.alert("Hi")}>
      <View style={styles.posts__left}>
        <Image
          style={styles.post__icon}
          source={{
            uri: `https://source.unsplash.com/1${number}00x900/?nature,water`,
          }}
        />
      </View>
      <View style={styles.posts__right}>
        {/* Right */}

        <View style={styles.posts__right__title}>
          <View style={{ flexDirection: "row", flex: 0.9 }}>
            <Text style={styles.text__username}>{userName}</Text>
            <Text style={{ fontWeight: "normal", color: colors.grey }}>
              {" "}
              {`@${userName}`} · {"2 yrs"}
            </Text>
          </View>
          <View style={styles.dots}>
            <Menu>
              <MenuTrigger>
                <Entypo
                  name="dots-three-vertical"
                  size={18}
                  color={colors.grey}
                />
              </MenuTrigger>

              <MenuOptions>
                <MenuOption onSelect={deleteItem}>
                  <Text style={{ color: "red" }}>Delete</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        <View style={styles.posts__right__content}>
          <Text>{content}</Text>
        </View>
        <View style={styles.posts__right__picture}>
          <Image
            style={styles.post__picture}
            source={{
              uri: `https://source.unsplash.com/1${number}00x900/?nature,water`,
            }}
          />
        </View>
        <View style={styles.posts__right__buttons}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chat-outline"
              size={22}
              color={colors.postIconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="twitter-retweet"
              size={22}
              color={colors.postIconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={likePost}
          >
            <AntDesign name={heartName} size={17} color={heartColor} />
            <Text
              style={{ fontSize: 10, marginLeft: 5, color: `${heartColor}` }}
            >
              {like}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="sharealt" size={18} color={colors.postIconColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  dots: {
    flex: 0.1,
  },
  posts: {
    width: "100%",
    height: 300,
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  posts__left: {
    flex: 0.2,
  },
  post__icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 14,
    alignSelf: "center",
  },
  posts__right: {
    flex: 0.8,
  },

  posts__right__title: {
    flex: 0.07,
    flexDirection: "row",
  },
  posts__right__content: {},
  posts__right__picture: {
    flex: 0.53,
    paddingVertical: 10,
    paddingRight: 5,
  },
  post__picture: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  posts__right__buttons: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text__username: {
    fontWeight: "bold",
  },
});
