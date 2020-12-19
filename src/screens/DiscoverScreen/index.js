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
import { Avatar, IconButton } from "react-native-paper";
import _ from "lodash";

const Discover = ({ navigation, route }) => {
  const [{ animals }] = useContext(SessionContext);
  console.log(route.params);
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
    });
  }, [navigation]);

  const moveToInfoScreen = (id) => {
    navigation.push("DiscoverDetailScreen", { animalId: id });
  };

  const Item = ({ id, image, shelter, animal, breed, tags }) => (
    <TouchableOpacity style={styles.item} onPress={() => moveToInfoScreen(id)}>
      <Avatar.Image size={150} source={image[0]} />
      <View style={styles.contentView}>
        <Text style={styles.title}>
          {animal}/{breed}
        </Text>
        <Text style={styles.content}>{shelter}</Text>
        <Text style={styles.content}>{tags}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      image={item.image}
      shelter={item.shelter}
      animal={item.animal}
      breed={item.breed}
      tags={item.tags}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
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
  gridContainer: {
    paddingTop: 10,
  },
  item: {
    width: "50%",
    height: 250,
    alignItems: "center",
  },
  contentView: {
    height: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    flex: 1,
    fontSize: 14,
  },
});

export default Discover;
