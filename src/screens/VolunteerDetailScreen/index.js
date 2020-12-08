import React, { Fragment, useContext } from "react";
import { withStyles } from "@ui-kitten/components";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import SessionContext from "../../store/context";
import styles from "./VolunteerDetail.style";

const VolunteerDetailScreen = ({ navigation, route, eva }) => {
  const { volunteers } = useContext(SessionContext);
  const { volunteerId } = route.params;

  const { shelterName, image, address, city } = volunteers[volunteerId];

  const moveToChatScreen = () => {
    navigation.navigate("ChatScreen");
  };

  return (
    <View style={eva.style.container}>
      <Image style={eva.style.avatar} source={image} />
      <View style={eva.style.info}>
        {/* TODO: Finish styling */}
        <Text style={eva.style.title}>{shelterName}</Text>
        <Text style={eva.style.text}>{address}</Text>
        <Text style={eva.style.text}>{city}</Text>
      </View>
      <View style={eva.style.btns}>
        <Text style={eva.style.followBtn}>FOLLOW</Text>
      </View>
      <View style={eva.style.btns}>
        <Text style={eva.style.messageBtn} onPress={moveToChatScreen}>
          MESSAGE
        </Text>
      </View>
    </View>
  );
};

const WithStylesVolunteerDetail = withStyles(VolunteerDetailScreen, styles);

export default WithStylesVolunteerDetail;
