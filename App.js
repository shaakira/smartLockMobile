import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CodeVerification from "./src/modules/auth/CodeVerification/CodeVerification";
import Login from "./src/modules/auth/Login/Login";
import MobileScreen from "./src/modules/auth/MobileScreen/MobileScreen";
import Register from "./src/modules/auth/Register/Register";
import WelcomeScreen from "./src/modules/auth/WelcomeScreen/WelcomeScreen";
import Navigator from './src/routes/drawer';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
