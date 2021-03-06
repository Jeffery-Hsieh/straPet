import React, { useState, useLayoutEffect, useEffect, Component } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
  ActionSheetIOS,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
  Avatar,
  RadioButton,
  Text,
  IconButton,
  Colors,
} from "react-native-paper";
import useGetImagePicker from "../../hooks/useGetImagePicker";

import RadarChart from "../../components/RadarChart";
import TagInput from "react-native-tags-input";

class Tagging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: "",
        tagsArray: [],
      },
    };
  }

  updateTagState = (state) => {
    this.setState({
      tags: state,
    });
  };

  render() {
    return (
      <View style={tagStyles.container}>
        <TagInput
          placeholder="Add Tags..."
          updateState={this.updateTagState}
          tags={this.state.tags}
        />
      </View>
    );
  }
}

const genders = ["Male", "Female", "Unknown"];

const cities = [
  { label: "Taipei City", value: "taipei" },
  { label: "New Taipei City", value: "new taipei" },
  { label: "Tauyuan City", value: "tauyuan" },
];

const breeds = [
  { label: "Mixed", value: "Mixed" },
  { label: "Shiba", value: "shiba" },
  { label: "Labrador", value: "labrador" },
  { label: "Goldendoodle", value: "goldendoodle" },
  { label: "Corgi Triever", value: "corgi triever" },
];

const ages = [
  { label: "1~3 months", value: "1~3 months" },
  { label: "3~5 months", value: "3~5 months" },
  { label: "5~12 months", value: "5~12 months" },
  { label: "1~2 years", value: "1~2 years" },
  { label: "2~ years", value: "2~ years" },
];

const UploadScreen = ({ navigation, route }) => {
  const initTraits = {
    extraverted: 0,
    friendly: 0,
    energetic: 0,
    selfControl: 0,
    size: 0,
    appetite: 0,
  };

  const [gender, setGender] = useState("Unknown");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [traits, setTraits] = useState(initTraits);
  const [image, onPickImage] = useGetImagePicker(null);
  // const [cameraImage, setCameraImage] = useState(null);
  // const [camera, setShowCamera] = useState(false);
  // const [hasPermission, setHasPermission] = useState(false);

  const data = Object.keys(traits).map((key) => traits[key]);

  const genderRadioBtns = genders.map((g) => (
    <TouchableOpacity
      key={g}
      style={radioButtonStyles.container}
      onPress={() => setGender(g)}
    >
      <RadioButton value={g} status={g === gender ? "checked" : "unchecked"} />
      <Text>{g}</Text>
    </TouchableOpacity>
  ));

  const editRadarChart = () => {
    navigation.push("EditTrait", {
      initTraits: { ...traits },
      setParentTraits: setTraits,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="check"
          onPress={() => navigation.push("UploadComplete")}
        />
      ),
    });
  }, [navigation]);

  const ImageButtonOnPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Camera", "Album"],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            return;
          case 1:
            if (hasPermission) {
              setShowCamera(true);
            }
            return;
          case 2:
            onPickImage();
        }
      }
    );
  };
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.touchView}>
        <TouchableOpacity style={styles.avatarTouch}>
          <Avatar.Image
            size={120}
            source={image ? { uri: image } : null}
            style={{ backgroundColor: "#04DAC4" }}
          />
          <IconButton
            style={styles.camera}
            icon="camera"
            size={30}
            color={Colors.black}
            onPress={ImageButtonOnPress}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radarChartTouch}
          onPress={editRadarChart}
        >
          <RadarChart data={data} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Gender</Text>
        <View style={styles.genderRadioBtns}>{genderRadioBtns}</View>
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>Breed</Text>
        <RNPickerSelect
          placeholder={{
            label: "Select a breed...",
          }}
          style={{ ...pickerSelectStyles }}
          onValueChange={(value) => setBreed(value)}
          value={breed}
          items={breeds}
          onDonePress={() => console.log("Press")}
        />
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>Age</Text>
        <RNPickerSelect
          placeholder={{
            label: "Select the age range...",
          }}
          style={{ ...pickerSelectStyles }}
          onValueChange={(value) => setAge(value)}
          value={age}
          items={ages}
        />
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>City</Text>
        <RNPickerSelect
          placeholder={{
            label: "Select a city...",
          }}
          style={{ ...pickerSelectStyles }}
          onValueChange={(value) => setCity(value)}
          value={city}
          items={cities}
        />
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>Address</Text>
        <TextInput
          multiline
          style={styles.address}
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>Tags</Text>
        <Tagging style={tagStyles.container} />
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>Description</Text>
        <TextInput
          multiline
          style={styles.descriptionText}
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  scrollView: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  touchView: {
    height: 160,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  col: {
    flex: 1,
    marginBottom: 20,
    paddingRight: 16,
  },
  avatarTouch: {
    flex: 1,
  },
  radarChartTouch: {
    flex: 2,
  },
  camera: {
    backgroundColor: "#F1E3CD",
    position: "absolute",
    right: -10,
    bottom: -10,
  },
  radarChart: {
    width: 180,
    height: 180,
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    color: "#637E40",
  },
  genderRadioBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  address: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  descriptionText: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});

const radioButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const tagStyles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
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
export default UploadScreen;
