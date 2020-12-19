import React from "react";

import {
  BottomNavigation,
  BottomNavigationTab,
  withStyles,
  Icon,
} from "@ui-kitten/components";

import { SafeAreaView } from "react-native-safe-area-context";

const HomeIcon = (style) => <Icon {...style} name="home" />;
const MessageIcon = (style) => <Icon {...style} name="message-square" />;
const UploadIcon = (style) => <Icon {...style} name="upload" />;
const FavoriteIcon = (style) => <Icon {...style} name="heart" />;
const VolunteerIcon = (style) => <Icon {...style} name="people" />;

const TabBarComponent = ({ eva, navigation, state }) => {
  const changeTab = (index) => {
    const selectedTabRoute = state.routes[index];
    navigation.navigate(selectedTabRoute.name);
  };

  const { style } = eva;
  const { index: selectedIndex } = state;
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={changeTab}
      appearance="noIndicator"
      style={style.tabBar}
    >
      <BottomNavigationTab title="Home" icon={HomeIcon} />
      <BottomNavigationTab title="Message" icon={MessageIcon} />
      <BottomNavigationTab title="Upload" icon={UploadIcon} />
      <BottomNavigationTab title="Favorite" icon={FavoriteIcon} />
      <BottomNavigationTab title="Volunteer" icon={VolunteerIcon} />
    </BottomNavigation>
  );
};

export default withStyles(TabBarComponent, (theme) => ({
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: theme["color-border"],
  },

  badgeContainer: (unReadCount) => ({
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  badgeWrapper: (unReadCount) => ({
    padding: 2,
    borderRadius: unReadCount > 10 ? 20 : 18,
    backgroundColor: theme["color-basic-100"],
    left: unReadCount > 99 ? 14 : 10,
  }),
  badgeView: (unReadCount) => ({
    borderRadius: unReadCount > 10 ? 20 : 18,
    minWidth: unReadCount > 10 ? 20 : 18,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  }),
  badgeText: (unReadCount) => ({
    fontSize: theme["font-size-extra-small"],
    color: theme["color-basic-100"],
    paddingVertical: unReadCount > 10 ? 2 : 1,
    paddingHorizontal: unReadCount > 10 ? 2 : 1,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: theme["font-semi-bold"],
  }),
}));
