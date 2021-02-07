
import React from "react";
import { StyleSheet, View } from "react-native";
import 'localstorage-polyfill'
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
