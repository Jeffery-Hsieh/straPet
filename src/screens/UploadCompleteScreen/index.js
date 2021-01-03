import React, { useLayoutEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { HeaderBackButton } from "@react-navigation/stack";
import { Avatar, IconButton } from "react-native-paper";

const UploadCompleteScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          title="Back"
          labelStyle={{ color: "#615846" }}
          tintColor="#615846"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Animals Uploaded" }],
            })
          }
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar.Image
          size={200}
          source={require("../../assets/images/animals/0_0.jpg")}
        />
      </View>

      <View style={styles.headerView}>
        <Text style={styles.title}>Thanks for uploading!</Text>
        <IconButton icon="pencil-outline" onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>
          If you have any question. please contact us:
        </Text>
        <View style={styles.contact}>
          <IconButton icon="phone" />
          <Text>(02) 8888-8888</Text>
        </View>
        <View style={styles.contact}>
          <IconButton icon="mail" />
          <Text>a123@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  avatar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerView: {
    width: "100%",
    justifyContent: "center",
    paddingLeft: 32,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  reminderContainer: {
    flex: 1,
    fontSize: 20,
    alignItems: "center",
  },
  reminderMessage: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    color: "#637E40",
  },
  contactContainer: {
    flex: 1,
    alignItems: "center",
  },
  contactTitle: {
    marginBottom: 12,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadCompleteScreen;
