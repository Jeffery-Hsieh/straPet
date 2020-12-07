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
          style={{ flex: 0.12, backgroundColor: "#fff", flexDirection: "row" }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./cat.jpg")}
          />
          <Text>
            {" "}
            Banqiao Public Shelter{"\n"}
            1F., No. 28, Bancheng Rd., Banqiao Dist., New Taipei City 220
          </Text>
        </View>
        <View
          style={{ flex: 0.12, backgroundColor: "#fff", flexDirection: "row" }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./shiba.jpg")}
          />
          <Text>
            {" "}
            Taipei City Animal Protection Office {"\n"} No. 852, Tanmei St.,
            Neihu Dist., Taipei City 114
          </Text>
        </View>
        <View
          style={{ flex: 0.12, backgroundColor: "#fff", flexDirection: "row" }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            source={require("./dog.jpg")}
          />
          <Text>
            {" "}
            Zhonghe Public Shelter {"\n"} 1F., No. 28, Bancheng Rd., Banqiao
            Dist., New Taipei City 220
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
});
export default VolunteerScreen;
