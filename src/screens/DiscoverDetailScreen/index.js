import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";

import SessionContext from "../../store/context";
import heart from "../../assets/images/heart.png";
import heart_filled from "../../assets/images/heart_filled.png";
import { Avatar, IconButton, Colors } from "react-native-paper";
import RadarChart from "../../components/RadarChart";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DiscoverDetailScreen = ({ navigation, route }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [{ animals }] = useContext(SessionContext);
  const { animalId } = route.params;

  const { image, shelter, animal, breed, city, gender, tags } = animals[
    animalId
  ];

  const randTraits = Array.from({ length: 6 }).map(() =>
    Math.ceil(Math.random() * 100)
  );

  const renderItem = ({ item }) => (
    <View style={styles.imageView}>
      <Image style={styles.image} source={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.shelterContainer}>
        <Avatar.Image
          size={40}
          source={require("../../assets/images/06p7GZJ3hIqb6Bv8h27j.png")}
        />
        <Text style={styles.shelterText}>{shelter}</Text>
        <TouchableOpacity
          style={styles.contactContainer}
          onPress={() =>
            navigation.navigate("Volunteer", {
              screen: "Chat",
              params: { groupId: "KK4me439pyuuojQMecyd" },
            })
          }
        >
          <Text style={styles.contactText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <FlatList
          horizontal={true}
          data={image}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
      <TouchableOpacity
        style={styles.saveContainer}
        onPress={() => setIsPressed(!isPressed)}
      >
        <Image
          style={styles.saveIcon}
          source={isPressed ? heart_filled : heart}
        />
        <Text style={styles.saveText}>{isPressed ? "Saved" : "Save"}</Text>
      </TouchableOpacity>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionTitleContainer}>
          <Text style={styles.descriptionTitleText}>{breed}</Text>
          <IconButton icon="gender-male" color={Colors.blue500} />
        </View>
        <Text style={styles.descriptionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tellus nisi, rhoncus in ex non, aliquam facilisis tellus. Sed ac sem
          at nisl euismod mattis vitae eu ipsum. Nam nec pulvinar dui.{" "}
        </Text>
      </View>
      <View style={styles.radarChartContainer}>
        <RadarChart data={randTraits} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  shelterContainer: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  shelterText: {
    flex: 1,
    fontSize: 12,
    marginLeft: 8,
    fontWeight: "bold",
  },
  contactContainer: {
    backgroundColor: "#C5A474",
  },
  contactText: {
    padding: 8,
    color: "#fff",
  },
  imageContainer: {
    height: 300,
    marginBottom: 16,
  },
  imageView: {
    width: windowWidth,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 3 / 2,
  },
  saveContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  saveIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  saveText: {
    fontSize: 16,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
  },
  descriptionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionTitleText: {
    fontSize: 20,
  },
  descriptionContent: {
    lineHeight: 20,
  },
  radarChartContainer: {
    flex: 1,
  },
});

export default DiscoverDetailScreen;
