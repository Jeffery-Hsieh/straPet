import React, { Fragment, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import Router from "./src/router";
import { useFonts, Galada_400Regular } from "@expo-google-fonts/galada";
import AppLoading from "expo-app-loading";

import { theme } from "./src/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Galada_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <Router />
      </ApplicationProvider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
