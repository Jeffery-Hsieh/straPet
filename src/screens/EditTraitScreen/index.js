import React, { useState } from "react";
import RadarChart from "../../components/RadarChart";
import { View, StyleSheet } from "react-native";
import RadarChartSlider from "../../components/RadarChartSlider";

const traitsLabels = {
  extraverted: "Extraverted",
  friendly: "Friendly",
  energetic: "Energetic",
  selfControl: "Self-Control",
  size: "Size",
  appetite: "Appetite",
};

const EditTraitScreen = () => {
  const initTraits = {
    extraverted: 0,
    friendly: 0,
    energetic: 0,
    selfControl: 0,
    size: 0,
    appetite: 0,
  };
  const [traits, setTraits] = useState(initTraits);
  const data = Object.keys(traits).map((key) => traits[key]);

  const handleSliderChange = (newValue) => {
    setTraits({
      ...traits,
      ...newValue,
    });
  };

  const sliders = Object.keys(initTraits).map((trait) => {
    const label = traitsLabels[trait];
    return (
      <RadarChartSlider
        key={trait}
        label={label}
        trait={trait}
        traitOnChange={handleSliderChange}
      />
    );
  });

  return (
    <>
      <View style={styles.radarContainer}>
        <RadarChart data={data} />
      </View>
      <View style={styles.sliderContainer}>{sliders}</View>
    </>
  );
};

const styles = StyleSheet.create({
  radarContainer: {
    flex: 1,
  },
  sliderContainer: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default EditTraitScreen;
