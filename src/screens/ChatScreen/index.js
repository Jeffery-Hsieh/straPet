import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import SessionContext from "../../store/context";
import useGetMessages from "../../hooks/useGetMessages";
import { IconButton } from "react-native-paper";
import * as firebase from "firebase";

const ChatScreen = ({ route }) => {
  const [session] = useContext(SessionContext);
  const { firebase, userId } = session;
  const { groupId } = route.params;

  // // get messages
  const [{ messages, isLoading, isError }, setMessages] = useGetMessages(
    firebase,
    groupId
  );

  const handleSend = async (messages) => {
    const text = messages[0].text;

    firebase
      .firestore()
      .collection("messages")
      .doc(groupId)
      .collection("chat")
      .add({
        sendAt: firebase.firestore.Timestamp.fromDate(new Date()),
        text: text,
        sender: userId,
      });
    firebase.firestore().collection("messages").doc(groupId).set({
      previewMsg: text,
    });
  };

  // Send icon
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendContainer}>
          <IconButton icon="send-circle" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  };

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: userId,
      }}
      alwaysShowSend={true}
      placeholder="Type your message here..."
      renderSend={renderSend}
      renderLoading={renderLoading}
    />
  );
};

const styles = StyleSheet.create({
  sendContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
