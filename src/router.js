import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SessionProvider } from "./store/context";

// Tabs
import TabBar from "./components/TabBar";
import Message from "./screens/MessageScreen";
import Upload from "./screens/UploadScreen";
import Favorite from "./screens/FavoriteScreen";
import VolunteerList from "./screens/VolunteerListScreen";
import VolunteerDetail from "./screens/VolunteerDetailScreen";

import Discover from "./screens/DiscoverScreen";
import DiscoverDetailScreen from "./screens/DiscoverDetailScreen";
import DiscoverFilterScreen from "./screens/DiscoverFilterScreen";

import ChatScreen from "./screens/ChatScreen";
import EditTraitScreen from "./screens/EditTraitScreen";
import UploadCompleteScreen from "./screens/UploadCompleteScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#F1E3CD",
  },
  headerTitleStyle: {
    fontFamily: "Galada_400Regular",
    fontSize: 30,
    alignSelf: "center",
  },
  headerTintColor: "#5C5341",
  headerBackTitle: "Back",
};

const DiscoverStack = () => (
  <Stack.Navigator
    initialRouteName="Discover"
    screenOptions={screenOptionStyle}
  >
    <Stack.Screen name="Discover" component={Discover} />
    <Stack.Screen
      name="DiscoverDetailScreen"
      component={DiscoverDetailScreen}
    />
    <Stack.Screen
      name="DiscoverFilterScreen"
      component={DiscoverFilterScreen}
    />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator initialRouteName="Message" screenOptions={screenOptionStyle}>
    <Stack.Screen name="Message" component={Message} />
  </Stack.Navigator>
);

const UploadStack = () => (
  <Stack.Navigator initialRouteName="Upload" screenOptions={screenOptionStyle}>
    <Stack.Screen name="Upload" component={Upload} />
    <Stack.Screen name="EditTraitScreen" component={EditTraitScreen} />
    <Stack.Screen
      name="UploadCompleteScreen"
      component={UploadCompleteScreen}
    />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator
    initialRouteName="Favorite"
    screenOptions={screenOptionStyle}
  >
    <Stack.Screen name="Favorite" component={Favorite} />
  </Stack.Navigator>
);

const VolunteerStack = () => {
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
    <Tab.Screen name="Discover" component={DiscoverStack} />
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
