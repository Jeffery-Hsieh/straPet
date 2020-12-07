import React, { Fragment } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
} from "react-native";

const VolunteerScreen = () => {
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
        <Text>Volunteer</Text>
      </View>
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
