import { Platform, View } from "react-native";

import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { globalStyles } from "@/styles/global-styles";

import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("#000000");
}

export default function RootLayout() {
  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
}
