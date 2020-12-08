import React, { Fragment, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import Router from "./src/router";
import * as Font from "expo-font";

import { theme } from "./src/theme";

export default function App() {
  useEffect(async () => {
    await Font.loadAsync({ galada: require("./assets/Galada-Regular.ttf") });
  }, []);

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
