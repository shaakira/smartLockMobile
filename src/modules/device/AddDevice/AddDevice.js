import React from "react";
import axios from "axios";
import menu from "../../../../assets/hamburger.png";
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
import styles from "./AddDevice.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";

class AddDevice extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  navigation = this.props.navigation;


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
    .post("http://192.168.1.3:5000/user/signup", user)
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
          <TouchableOpacity  onPress={() => this.navigation.openDrawer()}>
            <Image source={menu} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Devices</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.bottomContainer}
        >
          <ScrollView
            style={styles.keyboardAwareContentContainer}
            showsVerticalScrollIndicator={false}
          >
            
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default AddDevice;
