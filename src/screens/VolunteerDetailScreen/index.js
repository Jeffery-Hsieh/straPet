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
    navigation.navigate("Chat");
  };

  return (
    <View style={eva.style.container}>
      <View style={eva.style.avatar}>
        <Image style={eva.style.avatarImage} source={image} />
      </View>
      <View style={eva.style.info}>
        <Text style={eva.style.title}>{shelterName}</Text>
        <Text style={eva.style.text}>{address}</Text>
        <Text style={eva.style.text}>{city}</Text>
      </View>
      <View style={eva.style.followBtn}>
        <Text style={eva.style.followText}>FOLLOW</Text>
      </View>
      <View style={eva.style.messageBtn}>
        <Text style={eva.style.messageText} onPress={moveToChatScreen}>
          MESSAGE
        </Text>
      </View>
    </View>
  );
};

const WithStylesVolunteerDetail = withStyles(VolunteerDetailScreen, styles);

export default WithStylesVolunteerDetail;
