import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const radarChartSlider = ({ label, trait, traitOnChange }) => {
  const handleChange = (newValue) => {
    traitOnChange({ [trait]: newValue });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#F1E3CD"
          maximumTrackTintColor="#FFFFFF"
          onValueChange={handleChange}
          trackImage={"../../assets/sliderButton.png"}
        />
        <View style={styles.textCon}>
          <Text style={styles.colorGrey}>0%</Text>
          {/* <Text style={styles.colorYellow}>{`${value.toFixed()}%`}</Text> */}
          <Text style={styles.colorGrey}>100%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 15,
    width: 150,
    marginRight: 10,
  },
  sliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: 250,
    height: 40,
  },
  textCon: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  colorYellow: {
    color: "#E2BD3A",
  },
});

export default radarChartSlider;
