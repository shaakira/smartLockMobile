import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import styles from "./WelcomeScreen.styles";
class WelcomeScreen extends React.Component {
  navigation = this.props.navigation;
  pressHandler = () => {
    this.navigation.navigate("MobileScreen");
  };
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:'white'}}>
        <View style={{ flex: 4 ,backgroundColor:'white'}}></View>
        <View style={{ flex: 2 ,backgroundColor:'white'}}>
          <Button
            title="LET'S START"
            buttonStyle={styles.buttonStyle}
            onPress={this.pressHandler}
          />
        </View>
      </View>
    );
  }
}
export default WelcomeScreen;
