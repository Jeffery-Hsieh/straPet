import React, { useState, useLayoutEffect, useEffect } from "react";
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

const EditTraitScreen = ({ navigation, route }) => {
  const { initTraits, setParentTraits } = route.params;
  const [traits, setTraits] = useState(initTraits);
  const data = Object.keys(traits).map((key) => traits[key]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="check"
          onPress={() => {
            navigation.goBack("Upload");
          }}
        />
      ),
    });
  }, [navigation]);

  const handleSliderChange = (trait, newValue) => {
    setTraits({
      ...traits,
      [trait]: newValue,
    });
    setParentTraits({
      ...traits,
      [trait]: newValue,
    });
  };

  const sliders = Object.keys(traits).map((trait) => {
    const label = traitsLabels[trait];
    return (
      <RadarChartSlider
        key={trait}
        label={label}
        trait={trait}
        initValue={initTraits[trait]}
        traitOnChange={(newValue) => handleSliderChange(trait, newValue)}
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
