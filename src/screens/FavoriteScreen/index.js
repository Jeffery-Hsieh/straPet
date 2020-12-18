import React, { Fragment, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import SessionContext from "../../store/context";

const VolunteerScreen = () => {
  const [session] = useContext(SessionContext);

  const favoritelist = session.favoritelist.map(
    ({ id, shelter, image, breed, gender }) => (
      <View key={id} style={styles.content}>
        <Image style={styles.imageStyle} source={image} />
        <View style={{ flex: 1, flextDirection: "column" }}>
          <Text style={styles.information}>Place: {shelter}</Text>
          <Text style={styles.information}>Breed: {breed}</Text>
          <Text style={styles.information}>Gender: {gender}</Text>
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
