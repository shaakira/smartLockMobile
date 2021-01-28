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

class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleChange = (text) => {
    return (name) => {
      const user = { ...this.state.user };
      user[name] = text;
      this.setState({ user });
    };
  };
  handleSubmit = async () => {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    await axios
    .post("http://192.168.1.103:5000/user/signup", user)
    .then((response) => {
      if (response.status === 200) {
        console.log('success');
    

      }
    }).catch((error)=>{
      console.log(error)
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity>
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
                onChangeText={(value) => this.setState({ email: value })}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.text}>PASSWORD</Text>
              <TextField
                secureTextEntry
                value={this.state.password}
                name="password"
                onChangeText={(value) => this.setState({ password: value })}
              />
              <Text style={styles.pwdText}>
                Your password must be 6 or more characters long
              </Text>
            </View>
            <Button
              title="CREATE AN ACCOUNT"
              buttonStyle={styles.buttonStyle}
              onPress={this.handleSubmit}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Register;
