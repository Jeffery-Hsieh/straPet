import React, { Fragment, useContext } from "react";
import { withStyles } from "@ui-kitten/components";
import { View, Image, Text, TouchableOpacity } from "react-native";
import SessionContext from "../../store/context";
import styles from "./VolunteerDetail.style";

const VolunteerDetailScreen = ({ navigation, route, eva }) => {
  // TODO: Get chat groupId from db
  const groupId = "pV343AjSSn7O0zbYwc4k";
  const [session] = useContext(SessionContext);
  const { volunteerId } = route.params;

  const { shelterName, image, address, city } = session.volunteers[volunteerId];

  const moveToChatScreen = () => {
    navigation.navigate("Message", {
      screen: "Chat",
      params: { groupId: groupId },
    });
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
      <TouchableOpacity style={eva.style.followBtn}>
        <Text style={eva.style.followText}>FOLLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={eva.style.messageBtn} onPress={moveToChatScreen}>
        <Text style={eva.style.messageText}>MESSAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

const WithStylesVolunteerDetail = withStyles(VolunteerDetailScreen, styles);

export default WithStylesVolunteerDetail;
