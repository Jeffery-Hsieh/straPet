import React, { useState, useLayoutEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import RadarChartSlider from "../../components/RadarChartSlider";
import { IconButton, RadioButton } from "react-native-paper";
import { filter } from "lodash";

const genders = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "No Preference", value: "" },
];

const selectData = [
  {
    key: "species",
    title: "Species",
    options: [
      { label: "Cat", value: "cat" },
      { label: "Dog", value: "dog" },
      { label: "Bird", value: "bird" },
    ],
  },
  {
    key: "breed",
    title: "Breed",
    options: [
      { label: "Shiba", value: "shiba" },
      { label: "Labrador", value: "labrador" },
      { label: "Goldendoodle", value: "goldendoodle" },
      { label: "Corgi Triever", value: "corgi triever" },
    ],
  },
  {
    key: "city",
    title: "City",
    options: [
      { label: "Taipei City", value: "Taipei City" },
      { label: "New Taipei City", value: "New Taipei City" },
      { label: "Taoyuan City", value: "Taoyuan City" },
    ],
  },
  {
    key: "age",
    title: "Age",
    options: [
      { label: "1~3 months", value: "1~3 months" },
      { label: "3~5 months", value: "3~5 months" },
      { label: "5~12 months", value: "5~12 months" },
      { label: "1~2 years", value: "1~2 years" },
      { label: "2~ years", value: "2~ years" },
    ],
  },
  {
    key: "tag",
    title: "Tag",
    options: [
      { label: "Quiet", value: "Quiet" },
      { label: "Medium Size", value: "Medium Size" },
      { label: "Puppy", value: "Puppy" },
      { label: "Protective", value: "Protective" },
      { label: "Play", value: "Play" },
      { label: "Close to people", value: "Close to people" },
      { label: "Friendly", value: "Friendly" },
      { label: "Cute", value: "Cute" },
    ],
  },
];

const DiscoverFilterScreen = ({ navigation }) => {
  console.disableYellowBox = true;
  const initialSelectState = {
    species: "",
    breed: "",
    city: "",
    age: "",
    tag: "",
  };

  const initialTraitState = {
    extraverted: 0,
    friendly: 0,
    energetic: 0,
    selfControl: 0,
    size: 0,
    appetite: 0,
  };

  const [filters, setFilters] = useState(initialSelectState);
  const [traits, setTraits] = useState(initialTraitState);
  const [gender, setGender] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="check"
          onPress={() => {
            navigation.navigate("Discover", {
              filters: { ...filters, gender: gender },
            });
          }}
        />
      ),
    });
  }, [navigation, filters, gender]);

  const changeFilterValue = (key, newValue) => {
    setFilters({ ...filters, [key]: newValue });
  };

  const handleSliderChange = (newValue) => {
    setTraits({
      ...traits,
      ...newValue,
    });
  };

  const genderRadioBtns = genders.map((g) => (
    <TouchableOpacity
      key={g.label}
      style={radioButtonStyles.container}
      onPress={() => setGender(g.value)}
    >
      <RadioButton
        value={g.value}
        status={g.value === gender ? "checked" : "unchecked"}
      />
      <Text>{g.label}</Text>
    </TouchableOpacity>
  ));

  const renderItem = ({ item }) => (
    <View style={styles.selectContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <RNPickerSelect
        style={{ ...pickerSelectStyles }}
        onValueChange={(newValue) => changeFilterValue(item.key, newValue)}
        value={filters[item.key]}
        items={item.options}
        placeholder={{
          label: `No preference...`,
        }}
      />
    </View>
  );

  const sliders = Object.keys(traits).map((trait) => {
    return (
      <RadarChartSlider
        key={trait}
        label={trait}
        trait={trait}
        traitOnChange={handleSliderChange}
      />
    );
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.genderView}>
        <Text style={styles.title}>Gender</Text>
        <View style={styles.radioBtns}>{genderRadioBtns}</View>
      </View>
      <View style={styles.selectGrid}>
        <FlatList data={selectData} numColumns={2} renderItem={renderItem} />
      </View>
      <View style={styles.sliderContainer}>{sliders}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingVertical: 12,
  },
  radioBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  selectContainer: {
    flex: 1,
    marginRight: 12,
    marginVertical: 12,
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    color: "#637E40",
  },
  sliderContainer: {
    height: 500,
    marginTop: 12,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const radioButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default DiscoverFilterScreen;
