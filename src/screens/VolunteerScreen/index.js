import React, { Fragment } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
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
        <View style={styles.content}>
          <Image style={styles.imageStyle} source={require("./cat.jpg")} />
          <Text>
            {" "}
            <Text style={styles.name}>Banqiao Public Shelter</Text>
            {"\n"}
            <Text style={styles.addr}>
              {" "}
              1F, No. 28, Bancheng Rd, Banqiao Dist,{"\n"} New Taipei City 220
            </Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> More Info </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image style={styles.imageStyle} source={require("./shiba.jpg")} />
          <Text>
            {" "}
            <Text style={styles.name}>Taipei City Animal Protectio..</Text>
            {"\n"}
            <Text style={styles.addr}>
              {" "}
              No. 852, Tanmei St, Neihu Dist,
              {"\n"}
              Taipei City 114
            </Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> More Info </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image style={styles.imageStyle} source={require("./dog.jpg")} />
          <Text>
            {" "}
            <Text style={styles.name}>Zhonghe Public Shelter</Text>
            {"\n"}
            <Text style={styles.addr}>
              {" "}
              1F, No. 28, Bancheng Rd, Banqiao Dist,{"\n"} New Taipei City 220
            </Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> More Info </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 0.12,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
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
    borderRadius: 400 / 2,
  },
  button: {
    margin: 20,
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
