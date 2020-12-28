import React, { Fragment, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import SessionContext from "../../store/context";
import { IconButton, Colors } from "react-native-paper";

const VolunteerScreen = () => {
  const [session] = useContext(SessionContext);

  const favoritelist = session.favoritelist.map(
    ({ id, shelter, image, breed, gender }) => (
      <View key={id} style={styles.content}>
        <Image style={styles.imageStyle} source={image} />
        <View style={{ flex: 1, flextDirection: "column" }}>
          <Text style={styles.information}>{shelter}</Text>
          <View style={styles.informationContainer}>
            <Text style={styles.information}>
              {breed != "mixed" ? breed : null}
            </Text>
            <IconButton
              icon={gender == "female" ? "gender-male" : "gender-female"}
              color={gender == "female" ? Colors.blue500 : Colors.red500}
            />
          </View>
        </View>
      </View>
    )
  );

  return (
    <Fragment>
      <View style={{ flex: 3.8, backgroundColor: "#fff" }}>{favoritelist}</View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 0.12,
    backgroundColor: "#fff",
    flexDirection: "row",
    margin: 15,
  },
  informationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  information: {
    fontSize: 17,
    color: "grey",
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50 / 2,
  },
});

export default VolunteerScreen;
