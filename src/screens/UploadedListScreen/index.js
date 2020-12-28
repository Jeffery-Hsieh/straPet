import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SessionContext from "../../store/context";
import { IconButton, Colors, Avatar } from "react-native-paper";

const VolunteerScreen = ({ navigation }) => {
  const [session] = useContext(SessionContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="plus"
          onPress={() => {
            navigation.navigate("Upload");
          }}
        />
      ),
    });
  }, [navigation]);

  const favoritelist = session.favoritelist.map(
    ({ id, shelter, image, breed, gender }) => (
      <View key={id} style={styles.favoriteView}>
        <Avatar.Image size={120} source={image} />
        <View style={styles.infoView}>
          <Text style={styles.title}>{shelter}</Text>
          <View style={styles.contentView}>
            <Text style={styles.text}>{breed != "mixed" ? breed : null}</Text>
            <IconButton
              style={styles.icon}
              icon={gender == "female" ? "gender-male" : "gender-female"}
              color={gender == "female" ? Colors.blue500 : Colors.red500}
            />
          </View>
        </View>
      </View>
    )
  );

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>{favoritelist}</ScrollView>
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
  contentView: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    color: "grey",
  },
});

export default VolunteerScreen;
