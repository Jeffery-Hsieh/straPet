import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SessionContext from "../../store/context";
import useGetPreviewMessage from "../../hooks/useGetPreviewMessage";
import { Avatar } from "react-native-paper";
import { set } from "lodash";

const image = {
  John: require("../../assets/images/Zk18OTDq8N1Ly9YtEle3.jpg"),
  "Taipei City Animal Protection Office": require("../../assets/images/06p7GZJ3hIqb6Bv8h27j.png"),
  "Banqiao Public Shelter": require("../../assets/images/EpXW3zdl3S3tKp9gFKe4.jpg"),
};

const MessageScreen = ({ navigation }) => {
  const [session] = useContext(SessionContext);
  const { firebase, userId } = session;

  const [{ groupData, isLaoding, isError }, setUserId] = useGetPreviewMessage(
    firebase,
    userId
  );

  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  const groupMessage = groupData.map(({ groupId, name, message }) => (
    <TouchableOpacity
      key={groupId}
      style={styles.content}
      onPress={() =>
        navigation.navigate("MessageChatRoom", { groupId: groupId })
      }
    >
      <Avatar.Image size={70} source={image[name]} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.information}>{message}</Text>
      </View>
    </TouchableOpacity>
  ));

  return <View style={{ flex: 1 }}>{groupMessage}</View>;
};

const styles = StyleSheet.create({
  content: {
    flex: 0.12,
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
  information: {
    fontSize: 12,
    color: "#7B7B7B",
  },
});

export default MessageScreen;
