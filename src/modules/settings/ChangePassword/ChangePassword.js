import React from "react";
import axios from "axios";
import arrow from "../../../../assets/back.png";
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
import styles from "./ChangePassword.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";

class ChangePassword extends React.Component {
  state = {
    newPassword: "",
    confirmPassword: "",
    modalVisibility: false,
  };
  navigation = this.props.navigation;

 
  handleSubmit = async () => {
    const user = {
      password: this.state.newPassword,
     
    };
  };
 
  render() {
      const disabled=this.state.confirmPassword===""||this.state.newPassword===""
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Change Password</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.bottomContainer}
        >
          <ScrollView
            style={styles.keyboardAwareContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ marginTop: 30 }}>
              <View style={styles.textInput}>
                <Text style={styles.text}>NEW PASSWORD</Text>
                <TextField
                  value={this.state.newPassword}
                  name="newPassword"
                secureTextEntry
                  onChangeText={(value) => this.setState({ newPassword: value })}
                />
                 <Text style={styles.pwdText}>
                New password must be 6 or more characters long
              </Text>
              </View>

              <View style={[styles.textInput,{marginTop:20}]}>
                <Text style={styles.text}>CONFIRM PASSWORD</Text>
                <TextField
                  value={this.state.confirmPassword}
                  name="confirmPassword"
                secureTextEntry

                  onChangeText={(value) => this.setState({ confirmPassword: value })}
                />
              </View>
            </View>
           

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 30,
              }}
            >
             
              <Button
                title="SAVE CHANGES"
                buttonStyle={styles.buttonStyle}
                onPress={this.handleSubmit}
                disabled={disabled}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        
      </View>
    );
  }
}

export default ChangePassword;
