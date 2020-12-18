import React, { useState, useContext } from "react";
import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  StatusBar, 
  Button,
  TouchableOpacity, 
  Dimensions,
  FlatList } from "react-native";

import SessionContext from "../../store/context";
import heart from "../../assets/images/heart.png"
import heart_filled from "../../assets/images/heart_filled.png"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeDetailScreen = ({ navigation, route }) => {
  const [isPressed, setIsPressed] = useState(false);
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
    

  const renderIcon = isPressed?
    <>
      <Image style={styles.icon} source={heart_filled}/>
      <Text>Saved</Text> 
    </> :
    <>
      <Image style={styles.icon} source={heart}></Image>
      <Text>Save</Text> 
    </>;

  return (
    <View style={styles.container}>
      <View style={ styles.shelter}>
        <Image style={styles.shelterIcon} ></Image>
        <View style={{height: 24}}>
          <Text style={styles.shelterText}>{shelter}</Text>
        </View>
        <Button
         title="Contact"
         style={styles.contactButton}
        />
      </View>
      <View style={ styles.imageList}>
        {imageList}
      </View>
      <TouchableOpacity onPress={ () => setIsPressed( !isPressed ) }>
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
    //flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  shelter: {
    height: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shelterIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#123456",
    //alignSelf: 'flex-left',
  },
  shelterText: {
    fontSize: 11,
    fontWeight: "bold",
    //alignSelf: 'center',
  },
  contactButton: {
    width: 74,
    height: 24,
    backgroundColor: '#406E9F',
    //justifyContent: 'left',
    //alignItems: 'flex-right',
    //alignContent: 'flex-end',
  },
  imageList: {
    height: 215,
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
