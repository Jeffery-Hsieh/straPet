import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SessionProvider } from "./store/context";

// Tabs
import TabBar from "./components/TabBar";
import Home from "./screens/HomeScreen";
import Message from "./screens/MessageScreen";
import Upload from "./screens/UploadScreen";
import Favorite from "./screens/FavoriteScreen";
import VolunteerList from "./screens/VolunteerListScreen";
import VolunteerDetail from "./screens/VolunteerDetailScreen";
import ChatScreen from "./screens/ChatScreen";
import { IconButton } from "react-native-paper";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator initialRouteName="Message">
    <Stack.Screen name="Message" component={Message} />
  </Stack.Navigator>
);

const UploadStack = () => (
  <Stack.Navigator initialRouteName="Upload">
    <Stack.Screen name="Upload" component={Upload} />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator initialRouteName="Favorite">
    <Stack.Screen name="Favorite" component={Favorite} />
  </Stack.Navigator>
);

const VolunteerStack = () => {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#F1E3CD",
    },
    headerTitleStyle: {
      fontFamily: "galada",
      fontSize: 30,
    },
    headerTintColor: "#5C5341",
    headerBackTitle: "Back",
  };

  return (
    <Stack.Navigator
      initialRouteName="Volunteer"
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen name="Volunteer" component={VolunteerList} />
      <Stack.Screen name="VolunteerDetail" component={VolunteerDetail} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Message" component={MessageStack} />
    <Tab.Screen name="Upload" component={UploadStack} />
    <Tab.Screen name="Favorite" component={FavoriteStack} />
    <Tab.Screen name="Volunteer" component={VolunteerStack} />
  </Tab.Navigator>
);

const routes = () => (
  <SessionProvider>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  </SessionProvider>
);

export default routes;
