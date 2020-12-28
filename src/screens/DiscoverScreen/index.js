import React, { useContext, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SessionContext from "../../store/context";
import { Avatar, IconButton, Colors } from "react-native-paper";
import _ from "lodash";

const Discover = ({ navigation, route }) => {
  const [{ animals }] = useContext(SessionContext);
  const filters = route.params ? route.params.filters : null;

  const randNumDisplay = Math.ceil(Math.random() * animals.length);

  const animalsFiltered = filters
    ? _.sampleSize(animals, randNumDisplay)
    : animals;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="filter"
          onPress={() => navigation.navigate("DiscoverFilterScreen")}
        />
      ),
      headerLeft: () => (
        <IconButton
          icon="account"
          onPress={() => navigation.navigate("Profile")}
        />
      ),
    });
  }, [navigation]);

  const moveToInfoScreen = (id) => {
    navigation.push("DiscoverDetailScreen", { animalId: id });
  };

  const Item = ({ id, image, city, district, breed, tags, gender }) => {
    const tagList = tags.map((tag) => (
      <Text key={tag} style={styles.tag}>
        {tag}
      </Text>
    ));

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => moveToInfoScreen(id)}
      >
        <Avatar.Image size={150} source={image[0]} style={styles.avatar} />
        <View style={styles.contentView}>
          <View style={styles.tagContainer}>{tagList}</View>
          <View style={styles.subtitle}>
            {breed != "mixed" ? (
              <Text style={styles.breed}>{breed}</Text>
            ) : null}
            <IconButton
              style={styles.genderSymbol}
              icon={`gender-${gender}`}
              color={gender == "female" ? Colors.red500 : Colors.blue500}
            />
          </View>
          <Text style={styles.text}>{city}</Text>
          <Text style={styles.text}>{district}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      image={item.image}
      animal={item.animal}
      breed={item.breed}
      tags={item.tags}
      city={item.city}
      district={item.district}
      gender={item.gender}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {filters ? (
        <Text style={styles.matchNumber}>{randNumDisplay} animals matched</Text>
      ) : null}
      <FlatList
        contentContainerStyle={styles.gridContainer}
        data={animalsFiltered}
        numColumns={2}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  matchNumber: {
    height: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  gridContainer: {
    paddingTop: 10,
  },
  item: {
    width: "50%",
    height: 280,
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    marginBottom: 12,
  },
  contentView: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    textAlign: "center",
    maxWidth: 150,
    fontSize: 14,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row",
  },
  subtitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tag: {
    fontSize: 12,
    marginRight: 4,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
  },
});

export default Discover;
