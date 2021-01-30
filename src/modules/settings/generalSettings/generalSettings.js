import React from "react";
import axios from "axios";
import menu from "../../../../assets/hamburger.png";
import mail from "../../../../assets/mail.png";
import password from "../../../../assets/password.png";
import phone from "../../../../assets/phone.png";
import right from "../../../../assets/right.png";


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
import styles from "./generalSettings.styles";

class generalSettings extends React.Component {
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
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.openDrawer()}>
            <Image source={menu} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Settings</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.bottomContainer}
        >
          <ScrollView
            style={styles.keyboardAwareContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ margin: 30 }}>
              <Text style={styles.text}>PERSONAL DETAILS</Text>
              <TouchableOpacity onPress={()=>this.navigation.navigate("ChangeEmail")}>
                <View style={styles.cardStyle}>
                  <Image source={mail} style={styles.iconStyle} />
                  <Text style={styles.cardText}>CHANGE EMAIL</Text>
                  <Image source={right} style={styles.iconRight} />

                </View>
              </TouchableOpacity>
              <View style={styles.border}/>
              <TouchableOpacity onPress={()=>this.navigation.navigate("ChangePassword")}>
                <View style={styles.cardStyle}>
                  <Image source={password} style={styles.iconStyle} />
                  <Text style={styles.cardText}>CHANGE PASSWORD</Text>
                  <Image source={right} style={styles.iconRight2} />
                </View>
              </TouchableOpacity>
              <View style={styles.border}/>
              <TouchableOpacity onPress={()=>this.navigation.navigate("ChangeNumber")}>
                <View style={styles.cardStyle}>
                  <Image source={phone} style={styles.iconStyle} />
                  <Text style={styles.cardText}>CHANGE MOBILE NUMBER</Text>
                  <Image source={right} style={styles.iconRight3} />
                </View>
              </TouchableOpacity>
              <View style={styles.border}/>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default generalSettings;
