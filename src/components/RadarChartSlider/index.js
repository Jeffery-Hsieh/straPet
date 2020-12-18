import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const radarChartSlider = ({ label, trait, traitOnChange }) => {
  const handleChange = (newValue) => {
    traitOnChange({ [trait]: newValue });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#F1E3CD"
        maximumTrackTintColor="#FFFFFF"
        onValueChange={handleChange}
        trackImage={"../../assets/sliderButton.png"}
      />
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
    fontSize: 15,
    width: 150,
    marginRight: 10,
  },
});

export default radarChartSlider;
