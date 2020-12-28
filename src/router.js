import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SessionProvider } from "./store/context";

// Tabs
import TabBar from "./components/TabBar";
import Profile from "./screens/ProfileScreen";
import Message from "./screens/MessageScreen";
import Upload from "./screens/UploadScreen";
import Favorite from "./screens/FavoriteScreen";

import VolunteerList from "./screens/VolunteerListScreen";
import VolunteerDetail from "./screens/VolunteerDetailScreen";

import Discover from "./screens/DiscoverScreen";
import DiscoverDetailScreen from "./screens/DiscoverDetailScreen";
import DiscoverFilterScreen from "./screens/DiscoverFilterScreen";

import ChatScreen from "./screens/ChatScreen";
import UploadedListScreen from "./screens/UploadedListScreen";
import UploadEditTraitScreen from "./screens/UploadEditTraitScreen";
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
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen
      name="DiscoverDetailScreen"
      component={DiscoverDetailScreen}
      options={{
        title: "Discover",
      }}
    />
    <Stack.Screen
      name="DiscoverFilterScreen"
      component={DiscoverFilterScreen}
    />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator initialRouteName="Message" screenOptions={screenOptionStyle}>
    <Stack.Screen name="Message" component={Message} />
    <Stack.Screen
      name="MessageChatRoom"
      component={ChatScreen}
      options={{ title: "Chat" }}
    />
  </Stack.Navigator>
);

const UploadStack = () => (
  <Stack.Navigator
    initialRouteName="Animals Uploaded"
    screenOptions={screenOptionStyle}
  >
    <Stack.Screen name="Aniamls Uploaded" component={UploadedListScreen} />
    <Stack.Screen name="Upload" component={Upload} />
    <Stack.Screen name="EditTrait" component={UploadEditTraitScreen} />
    <Stack.Screen
      name="UploadComplete"
      component={UploadCompleteScreen}
      options={{ title: "" }}
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
      <Stack.Screen
        name="VolunteerShelter"
        component={VolunteerDetail}
        options={{ title: "Shelter Info" }}
      />
      <Stack.Screen
        name="VolunteerChatRoom"
        component={ChatScreen}
        options={{ title: "Chat" }}
      />
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
