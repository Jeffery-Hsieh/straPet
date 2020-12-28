import React, { useState, useLayoutEffect } from "react";
import RadarChart from "../../components/RadarChart";
import { View, StyleSheet } from "react-native";
import RadarChartSlider from "../../components/RadarChartSlider";
import { IconButton } from "react-native-paper";

const traitsLabels = {
  extraverted: "Extraverted",
  friendly: "Friendly",
  energetic: "Energetic",
  selfControl: "Self-Control",
  size: "Size",
  appetite: "Appetite",
};

const EditTraitScreen = ({ navigation }) => {
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="check"
          onPress={() => navigation.navigate("Upload", { traits: traits })}
        />
      ),
    });
  }, [navigation, traits]);

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
    marginTop: 12,
  },
  sliderContainer: {
    flex: 3,
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default EditTraitScreen;
