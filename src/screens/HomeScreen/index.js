import React, { Fragment, useContext } from "react";
import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  StatusBar, 
  TouchableOpacity, 
  FlatList } from "react-native";
import SessionContext from "../../store/context";
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const Home = () => {
  const { animals } = useContext(SessionContext);

  const Item = ({ image, shelter, animal, breed, tags }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={image[0]} />
  <Text style={styles.title}>{animal}/{breed}</Text>
      <Text style={styles.content}>{shelter}</Text>
      <Text style={styles.content}>{tags}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item 
      image={item.image} 
      shelter={item.shelter} 
      animal={item.animal}
      breed={item.breed} 
      tags={item.tags} 
    />
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={animals}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    // backgroundColor: '#19c2ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    alignContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    flex: 1,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 150 / 2,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    alignSelf: 'center',
    fontSize: 14,
    
  },
});

export default Home;
