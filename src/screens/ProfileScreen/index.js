import React, { useState, useContext, useLayoutEffect } from "react";
import SessionContext from "../../store/context";
import { View, Text, StyleSheet, Switch, TextInput } from "react-native";
import { Avatar, IconButton } from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  const [session, setSession] = useContext(SessionContext);
  const [userIndex, setUserIndex] = useState(0);

  const users = [
    {
      name: "John",
      userId: "Zk18OTDq8N1Ly9YtEle3",
      image: require("../../assets/images/Zk18OTDq8N1Ly9YtEle3.jpg"),
    },
    {
      name: "Banqiao Public Shelter",
      userId: "EpXW3zdl3S3tKp9gFKe4",
      image: require("../../assets/images/06p7GZJ3hIqb6Bv8h27j.png"),
    },
  ];

  const changeUser = () => {
    const newUserIndex = userIndex == 0 ? 1 : 0;
    setSession({
      ...session,
      userId: users[newUserIndex].userId,
    });
    setUserIndex(newUserIndex);
  };

  const { name, image } = users[userIndex];

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image size={100} source={image} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.text}>0912345678</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>shiba@gmail.com</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{userIndex == 0 ? "User" : "Shelter"}</Text>
        <View style={{ width: 200 }}>
          <Switch
            onValueChange={changeUser}
            value={userIndex == 0 ? false : true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatarContainer: {
    marginVertical: 24,
  },
  row: {
    marginBottom: 24,
    flexDirection: "row",
  },
  label: {
    width: 85,
    marginRight: 24,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#727372",
    width: 200,
  },
});

export default ProfileScreen;
