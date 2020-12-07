import React, { Fragment } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { Searchbar } from "react-native-paper";

const VolunteerScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Fragment>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "#FFE4B5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>Volunteer</Text>
      </View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={{ flex: 3.8, backgroundColor: "#fff" }}>
        <Text style={{ backgroundColor: "#fff" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./cat.jpg")}
          />
          <Text>Banqiao Public Shelter</Text>
        </Text>
        <Text style={{ backgroundColor: "#fff" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./shiba.jpg")}
          />
          <Text>Taipei City Animal Protection Office</Text>
        </Text>
        <Text style={{ backgroundColor: "#fff" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./dog.jpg")}
          />
          <Text>Zhonghe Public Shelter</Text>
        </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  },
});
export default VolunteerScreen;
