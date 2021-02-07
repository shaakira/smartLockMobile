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
import styles from "./Register.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import color from "../../../styles/color";

class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isEmailError: false,
    isPasswordError: false,
  };
  navigation = this.props.navigation;

  handleSubmit = async () => {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    let url=Expo.Constants.manifest.extra.myApiKey;
    await axios
      .post(`${url}/user/signup`, user)
      .then((response) => {
        if (response.status === 200) {
          console.log("success");
          this.navigation.navigate("Home");
          localStorage.setItem("user",JSON.stringify(response.data))

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const disabled =
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.isEmailError === true ||
      this.state.isPasswordError === true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Sign Up</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.bottomContainer}
        >
          <ScrollView
            style={styles.keyboardAwareContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.innerContainer}>
              <View style={styles.textStyle}>
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.text}>FIRST NAME</Text>
                  <TextField
                    value={this.state.firstName}
                    name="firstName"
                    onChangeText={(value) =>
                      this.setState({ firstName: value })
                    }
                  />
                </View>
              </View>
              <View style={styles.textStyle}>
                <View style={{ marginRight: 20 }}>
                  <Text style={styles.text}>LAST NAME</Text>
                  <TextField
                    value={this.state.lastName}
                    name="lastName"
                    onChangeText={(value) => this.setState({ lastName: value })}
                  />
                </View>
              </View>
            </View>

            <View style={styles.textInput}>
              <Text style={styles.text}>EMAIL</Text>
              <TextField
                value={this.state.email}
                name="email"
                onChangeText={(value) => {
                  if (reg.test(value) === false) {
                    this.setState({ email: value, isEmailError: true });
                  } else {
                    this.setState({ email: value, isEmailError: false });
                  }
                }}
                errorMessage={
                  this.state.isEmailError === true ? "Invalid Email" : ""
                }
                inputContainerStyle={{
                  borderBottomColor:
                    this.state.isEmailError === true ? "red" : color.brownGrey,
                }}
                isError={this.state.isEmailError}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.text}>PASSWORD</Text>
              <TextField
                secureTextEntry
                value={this.state.password}
                name="password"
                onChangeText={(value) => {
                  if (value.length < 6) {
                    this.setState({ password: value, isPasswordError: true });
                  } else {
                    this.setState({ password: value, isPasswordError: false });
                  }
                }}
                errorMessage={
                  this.state.isPasswordError === true && this.state.password !== ""
                    ? "Your password must be 6 or more characters long"
                    : ""
                }
                inputContainerStyle={{
                  borderBottomColor:
                    this.state.isPasswordError === true && this.state.password !== ""
                      ? "red"
                      : color.brownGrey,
                }}
                isError={this.state.isPasswordError}
              />
              <Text style={styles.pwdText}>
                {this.state.password === ""
                  ? "Your password must be 6 or more characters long"
                  : ""}
              </Text>
            </View>
            <Button
              title="CREATE AN ACCOUNT"
              buttonStyle={styles.buttonStyle}
              onPress={this.handleSubmit}
              disabled={disabled}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Register;
