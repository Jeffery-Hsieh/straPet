import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { Avatar } from "react-native-paper";

const UploadCompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar.Image
          size={120}
          source={require("../../assets/images/animals/0_0.jpg")}
        />
      </View>

      <View style={styles.reminderContainer}>
        <Text style={styles.title}>Thanks for uploading!</Text>
        <Text style={styles.reminderMessage}>Remeber to check messages.</Text>
        <Text style={styles.reminderMessage}>
          Let's help more stray animals together.
        </Text>
      </View>

      <View style={styles.contactContainer}>
        <Text>If you have any question. please contact us:</Text>
        <View style={styles.contact}>
          <IconButton icon="phone" />
          <Text>(02) 8888-8888</Text>
        </View>
        <View style={styles.contact}>
          <IconButton icon="mail" />
          <Text>a123@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity
          // style={styles.contactContainer}
          onPress={() => 
            navigation.navigate('Upload')
          }
        >
          <Text style={styles.title}>Keep Uploading</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 50,
    fontSize: 24,
    color: "#637E40",
  },
  contactContainer: {
    flex: 1,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadCompleteScreen;
