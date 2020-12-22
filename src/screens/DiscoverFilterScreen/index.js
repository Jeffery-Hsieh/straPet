import React, { useState, useLayoutEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import RadarChartSlider from "../../components/RadarChartSlider";
import { IconButton } from "react-native-paper";
import { filter } from "lodash";

const DiscoverFilterScreen = ({ navigation }) => {
  const selectData = [
    {
      key: "gender",
      title: "Gender",
      options: [
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
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
        { label: "Taipei City", value: "taipei" },
        { label: "New Taipei City", value: "new taipei" },
        { label: "Tauyuan City", value: "tauyuan" },
      ],
    },
    {
      key: "age",
      title: "Age",
      options: [
        { label: "~ 5", value: 0 },
        { label: "5 ~ 10", value: 1 },
        { label: "10 ~ ", value: 2 },
      ],
    },
  ];

  const initialSelectState = {
    gender: "",
    breed: "",
    city: "",
    age: "",
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="check"
          onPress={() => {
            navigation.navigate("Discover", { filters: filters });
          }}
        />
      ),
    });
  }, [navigation]);

  const changeFilterValue = (key, newValue) => {
    setFilters({ ...filters, [key]: newValue });
  };

  const handleSliderChange = (newValue) => {
    setTraits({
      ...traits,
      ...newValue,
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.selectContainer}>
      <Text style={styles.selectTitle}>{item.title}</Text>
      <RNPickerSelect
        style={{ ...pickerSelectStyles }}
        onValueChange={(newValue) => changeFilterValue(item.key, newValue)}
        value={filters[item.key]}
        items={item.options}
        placeholder={{
          label: `select an item...`,
        }}
      />
    </View>
  );

  const sliders = Object.keys(traits).map((trait) => {
    return (
      <RadarChartSlider
        key={trait}
        label={trait.toLocaleUpperCase()}
        trait={trait}
        traitOnChange={handleSliderChange}
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.selectGrid}>
        <FlatList data={selectData} numColumns={2} renderItem={renderItem} />
      </View>
      <View style={styles.sliderContainer}>{sliders}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  selectTitle: {
    marginBottom: 16,
    fontSize: 24,
    color: "#637E40",
  },
  sliderContainer: {
    flex: 1,
    justifyContent: "space-around",
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
