import React from "react";
import close from "../../../../assets/close.png";

import {
  Text,
  View,
  StatusBar,
  Image,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./MobileScreen.styles";
import PhoneInput from "react-native-phone-number-input";
import { Button } from "react-native-elements";

class MobileScreen extends React.Component {
  navigation = this.props.navigation;
  state = {
    phoneNumber: "",
  };

  pressHandler = () => {
    this.navigation.navigate("CodeVerification");
  };
  pressHandleLogin=()=>{
    this.navigation.navigate("Login");

  }
  render() {
      const disabled=this.state.phoneNumber===""
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={()=> this.navigation.goBack()}>
            <Image source={close} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Welcome!</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.bottomContainer}
        >
          <ScrollView
            style={styles.keyboardAwareContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.mobileStyle}>
              <Text style={styles.text}> MOBILE NUMBER</Text>

              <PhoneInput
                defaultCode="LK"
                placeholder="Enter your mobile #"
                textContainerStyle={styles.textContainerStyle}
                value={this.state.phoneNumber}
                onChangeText={(value) => {
                  this.setState({ phoneNumber: value });
                }}
              />
            </View>
            <Button
              title="NEXT"
              buttonStyle={styles.buttonStyle}
              onPress={() =>
                this.navigation.navigate("CodeVerification", {
                  phoneNumber: this.state.phoneNumber,
                })
                
              }
              disabled={disabled}
            />
            <View style={styles.btnContainer}>
              <Button
                title="SIGN IN WITH EMAIL"
                buttonStyle={styles.btmBtn}
                titleStyle={styles.btnText}
                onPress={this.pressHandleLogin}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export default MobileScreen;
