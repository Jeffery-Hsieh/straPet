import React, { Fragment, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import SessionContext from "../../store/context";
import { Searchbar } from "react-native-paper";

const VolunteerScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [session] = useContext(SessionContext);
  const onChangeSearch = (query) => setSearchQuery(query);

  const moveToInfoScreen = (id) => {
    navigation.push("VolunteerShelter", { volunteerId: id });
  };

  const shelters = session.volunteers
    .filter((item) =>
      // TODO: using rxjs would be better
      item.shelterName.includes(searchQuery)
    )
    .map(({ id, shelterName, image, address, city }) => (
      <View key={id} style={styles.content}>
        <Image style={styles.imageStyle} source={image} />
        <View style={{ flex: 1, flextDirection: "column" }}>
          <Text style={styles.name}>{shelterName}</Text>
          <Text style={styles.addr}>{address}</Text>
          <Text style={styles.addr}>{city}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => moveToInfoScreen(id)}
        >
          <Text style={styles.buttonText}>More Info </Text>
        </TouchableOpacity>
      </View>
    ));

  return (
    <Fragment>
      <View style={{ flex: 3.8, backgroundColor: "#fff" }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ flex: 0.12 }}
        />
        {shelters}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 0.12,
    backgroundColor: "#fff",
    flexDirection: "row",
    margin: 15,
  },
  name: {
    fontSize: 17,
  },
  addr: {
    color: "grey",
    fontSize: 12,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50 / 2,
  },
  button: {
    margin: 15,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#406E9F",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default VolunteerScreen;
