import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: `HAHA`,
          avatar: "https://placeimg.com/140/140/people",
        },
      },
      {
        _id: 2,
        text: "This is the first message I got",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: `HAHA`,
          avatar: "https://placeimg.com/140/140/people",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props} containerStyle={styles.sendContainer}>
        <SendIcon width={22.7} height={22.38} />
      </Send>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

const styles = StyleSheet.create({
  sendContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 15,
  },
});

export default ChatScreen;
