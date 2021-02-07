import React, { useState } from "react";
import axios from "axios";
import arrow from "../../../../assets/back.png";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./Login.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";
import color from "../../../styles/color";

class Login extends React.Component {
  navigation = this.props.navigation;

  state = {
    email: "",
    password: "",
    isError: false,
    isDanger: false,
  };
  pressHandleRegister = () => {
    this.navigation.navigate("Register");
  };

  onSubmit = async () => {
    const user = { email: this.state.email, password: this.state.password };
    let url=Expo.Constants.manifest.extra.myApiKey;
    if (this.state.password.length < 6) {
      this.setState({ isError: true });
    } else {
      await axios

        .post(`${url}/user/login`, user)
        .then((response) => {
          if (response.status === 200) {
            this.setState({ isDanger: false });
            this.toast.show("Successfully Logged in", 2000);
            this.navigation.navigate("Home");
            localStorage.setItem("user",JSON.stringify(response.data))
         
          } else if (response.status === 401) {
            this.setState({ isDanger: true });

            this.toast.show("error", 2000);
          }
        });
    }
  };
  render() {
    const disabled = this.state.email === "" || this.state.password === "";
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Welcome back!</Text>
        <Text style={styles.headerTxt}>Sign in to your account</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.bottomContainer}
        >
          <ScrollView
            style={styles.keyboardAwareContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.textStyle}>
              <View style={styles.textInput}>
                <Text style={styles.text}>EMAIL</Text>
                <TextField
                  value={this.state.email}
                  onChangeText={(value) => this.setState({ email: value })}
                />
              </View>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.text}>PASSWORD</Text>
              <TextField
                secureTextEntry
                value={this.state.password}
                onChangeText={(value) =>
                  this.setState({ password: value, isError: false })
                }
                errorMessage={
                  this.state.isError === true ? "Minimum 6 characters" : ""
                }
                inputContainerStyle={{
                  borderBottomColor:
                    this.state.isError === true ? "red" : color.brownGrey,
                }}
                isError={this.state.isError}
              />
            </View>
            <Button
              title="CONTINUE"
              buttonStyle={styles.buttonStyle}
              onPress={this.onSubmit}
              disabled={disabled}
            />
            <Toast
              ref={(toast) => (this.toast = toast)}
              style={{
                backgroundColor:
                  this.state.isDanger === false ? "green" : "red",
                borderRadius: 50,
                marginBottom: 100,
              }}
              position="bottom"
              positionValue={300}
              fadeInDuration={750}
              fadeOutDuration={1000}
              opacity={0.8}
              textStyle={{ color: "white" }}
            />
            <View style={styles.btnContainer}>
              <Button
                title="OOPS...I DON'T HAVE AN ACCOUNT"
                buttonStyle={styles.btmBtn}
                titleStyle={styles.btnText}
                onPress={this.pressHandleRegister}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Login;
