import React, { useState, useContext } from "react";
import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  StatusBar, 
  TouchableOpacity, 
  Dimensions,
  FlatList } from "react-native";
  import {
    Button,
    Icon,
    Input,
    Layout,
    MenuItem,
    OverflowMenu,
    Select,
    SelectItem,
    Tooltip,
  } from '@ui-kitten/components';

import SessionContext from "../../store/context";
import heart from "../../assets/images/heart.png"
import heart_filled from "../../assets/images/heart_filled.png"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeDetailScreen = ({ navigation, route }) => {
  const state = { isPressed: false };
  const { animals } = useContext(SessionContext);
  const { animalId } = route.params;
  
  const { image, shelter, animal, breed, city, gender, tags } = animals[animalId];
  
  const imageList = 
    <FlatList
      horizontal={true}
      data={image}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View>
          <Image style={styles.image} source={ item } />
        </View>
      )}
    />
    

  var renderIcon = state.isPressed?
      <Image style={styles.icon} source={heart_filled}/> :
      <Image style={styles.icon} source={heart}/> ;

  return (
    <View style={styles.container}>
      <View style={ styles.shelter}>
        {/* <Image style={styles.shelterImage} ></Image> */}
        <Text style={styles.shelterText}>{shelter}</Text>
      </View>
      <View style={ styles.imageList}>
        {imageList}
      </View>
      <TouchableOpacity onPress={ () => state.isPressed = !state.isPressed }>
        { renderIcon }
      </TouchableOpacity>
      <View >
        <Text style={styles.title}>{animal}, {breed}</Text>
        <Text style={styles.content}>Here should be some contents.</Text>
      </View>
      <View>
        <Text>Herer should be radar chart</Text>
      </View>
      <View>
        <Text style={styles.tags}>{tags}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  shelterText: {
    fontSize: 24,
    fontWeight: "bold",
    flexDirection: "row",
    alignSelf: 'flex-start',
  },
  imageList: {
    width: windowWidth,
  },
  image: {
    width: 330,
    height: 220,
    flex: 1,
    margin: 10,
  },
  icon: {
    // backgroundColor: "#f11223",
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
  },
  content: {
    fontSize: 12,
    color: "#000000",
  },
  tags: {

  }
});

export default HomeDetailScreen;