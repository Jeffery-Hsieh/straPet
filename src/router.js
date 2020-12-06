import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Tabs
import TabBar from "./components/TabBar";
import Home from "./screens/HomeScreen";
import Message from "./screens/MessageScreen";
import Upload from "./screens/UploadScreen";
import Favorite from "./screens/FavoriteScreen";
import Volunteer from "./screens/VolunteerScreen";

import ChatScreen from "./screens/ChatScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator initialRouteName="Message" headerMode="none">
    <Stack.Screen name="Home" component={Message} />
  </Stack.Navigator>
);

const UploadStack = () => (
  <Stack.Navigator initialRouteName="Upload" headerMode="none">
    <Stack.Screen name="Home" component={Upload} />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator initialRouteName="Favorite" headerMode="none">
    <Stack.Screen name="Favorite" component={Favorite} />
  </Stack.Navigator>
);

const VolunteerStack = () => (
  <Stack.Navigator initialRouteName="Volunteer" headerMode="none">
    <Stack.Screen name="Volunteer" component={Volunteer} />
  </Stack.Navigator>
);

const TabStack = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Message" component={MessageStack} />
    <Tab.Screen name="Upload" component={UploadStack} />
    <Tab.Screen name="Favorite" component={FavoriteStack} />
    <Tab.Screen name="Volunteer" component={VolunteerStack} />
  </Tab.Navigator>
);

const routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabStack} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = (theme) => ({
  container: {
    flex: 1,
  },
});

export default routes;
