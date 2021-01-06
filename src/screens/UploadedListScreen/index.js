import React, { useContext, useLayoutEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import SessionContext from "../../store/context";
import { IconButton, Colors, Avatar } from "react-native-paper";

const UploadedListScreen = ({ navigation }) => {
  const [session] = useContext(SessionContext);

  const favoritelist = session.animals.map(
    ({ id, shelter, image, breed, gender }) => (
      <TouchableOpacity key={id} style={styles.favoriteView}>
        <Avatar.Image size={120} source={image[0]} />
        <View style={styles.infoView}>
          <Text style={styles.title}>{shelter}</Text>
          <View style={styles.contentView}>
            <Text style={[styles.text, styles.breed]}>{breed}</Text>
            <IconButton
              style={styles.icon}
              icon={gender == "female" ? "gender-male" : "gender-female"}
              color={gender == "female" ? Colors.blue500 : Colors.red500}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  );

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <TouchableOpacity
        style={styles.favoriteView}
        onPress={() => navigation.navigate("Upload")}
      >
        <View style={styles.addView}>
          <IconButton
            icon="plus"
            size={50}
            color="#575757"
            onPress={() => {
              navigation.navigate("Upload");
            }}
            disabled={true}
          />
        </View>
        <View style={styles.infoView}>
          <View style={styles.contentView}>
            <Text>Upload animals here</Text>
          </View>
        </View>
      </TouchableOpacity>
      {favoritelist}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  favoriteView: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  infoView: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 32,
  },
  addView: {
    backgroundColor: "#D1D1D1",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  contentView: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    color: "grey",
  },
  breed: {
    textTransform: "capitalize",
  },
});

export default UploadedListScreen;
