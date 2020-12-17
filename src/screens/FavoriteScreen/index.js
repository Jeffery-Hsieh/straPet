import React, { Fragment, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import SessionContext from "../../store/context";

const FavoriteScreen = () => {
  return (
    <Fragment>
      <Text>test</Text>
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
  name: {
    fontSize: 17,
  },
  addr: {
    color: "grey",
    fontSize: 12,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50 / 2,
  },
  button: {
    margin: 15,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#406E9F",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default FavoriteScreen;
