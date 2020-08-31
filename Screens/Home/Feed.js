import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, RefreshControl, FlatList } from "react-native";
import { db, auth } from "../../Firebase/Firebase";
import Posts from "../Posts/Posts";
import colors from "../config/colors";

const Feed = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            content: doc.data().content,
            username: doc.data().username,
          }))
        );
      });
  }, []);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.refreshColor]}
          />
        }
        data={posts}
        renderItem={({ item }) => (
          <Posts
            key={item.timestamp}
            userName={item.username}
            content={item.content}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
