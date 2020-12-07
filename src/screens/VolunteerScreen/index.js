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
      <View style={{ flex: 3.8, backgroundColor: "#fff" }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ flex: 0.12 }}
        />
        <View
          style={{
            flex: 0.12,
            backgroundColor: "#fff",
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./cat.jpg")}
          />
          <Text>
            {" "}
            <Text style={{ fontSize: 17 }}>Banqiao Public Shelter</Text>
            {"\n"}
            <Text style={{ color: "grey", fontSize: 12 }}>
              {" "}
              1F, No. 28, Bancheng Rd, Banqiao Dist,{"\n"} New Taipei City 220
            </Text>
          </Text>
          <Button
            title="More Info"
            style={styles.loginScreenButton}
            underlayColor="#fff"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View
          style={{
            flex: 0.12,
            backgroundColor: "#fff",
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./shiba.jpg")}
          />
          <Text>
            {" "}
            <Text style={{ fontSize: 17 }}>
              Taipei City Animal Protection Office
            </Text>
            {"\n"}
            <Text style={{ color: "grey", fontSize: 12 }}>
              {" "}
              No. 852, Tanmei St, Neihu Dist, Taipei City 114
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 0.12,
            backgroundColor: "#fff",
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./dog.jpg")}
          />
          <Text>
            {" "}
            <Text style={{ fontSize: 17 }}>Zhonghe Public Shelter</Text>
            {"\n"}
            <Text style={{ color: "grey", fontSize: 12 }}>
              {" "}
              1F, No. 28, Bancheng Rd, Banqiao Dist,{"\n"} New Taipei City 220
            </Text>
          </Text>
        </View>
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
  loginScreenButton: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
export default VolunteerScreen;
