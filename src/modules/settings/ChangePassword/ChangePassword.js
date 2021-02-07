import React from "react";
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
import styles from "./ChangePassword.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";
import Toast from "react-native-easy-toast";
import color from "../../../styles/color"

class ChangePassword extends React.Component {
  state = {
    newPassword: "",
    confirmPassword: "",
    isDanger: false,
    isPasswordError: false,
  };
  navigation = this.props.navigation;

  handleSubmit = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const newUser = {
      password: this.state.newPassword,
    };
    let url=Expo.Constants.manifest.extra.myApiKey;
    if (this.state.newPassword === this.state.confirmPassword) {
      await axios
        .post(`${url}/user/updatePassword/${user._id}`, newUser, {
          headers: { Authorization: "Bearer " + user.token },
        })
        .then((res) => {
          if (res.status === 200) {
          localStorage.setItem("user",JSON.stringify(res.data))
            this.setState({
              newPassword: "",
              confirmPassword: "",
              isDanger:false
            });
            this.toast.show("Successfully updated", 2000);
            
          }
        })
        .catch((error) => {
          this.setState({ isDanger: true });
          this.toast.show(error, 2000);
        });
    } else {
      this.setState({ isDanger: true });
      this.toast.show(
        "Please make sure new password and confirm password are same",
        2000
      );
    }
  };

  render() {
    const disabled =
      this.state.confirmPassword === "" ||
      this.state.newPassword === "" ||
      this.state.isPasswordError === true;
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
                  onChangeText={(value) => {
                    if (value.length < 6) {
                      this.setState({ newPassword: value, isPasswordError: true });
                    } else {
                      this.setState({
                        newPassword : value,
                        isPasswordError: false,
                      });
                    }
                  }}
                  errorMessage={
                    this.state.isPasswordError === true && this.state.newPassword !== ""
                      ? "Your password must be 6 or more characters long"
                      : ""
                  }
                  inputContainerStyle={{
                    borderBottomColor:
                      this.state.isPasswordError === true && this.state.newPassword !== ""
                        ? "red"
                        : color.brownGrey,
                  }}
                  isError={this.state.isPasswordError}
                />
                <Text style={styles.pwdText}>
                {this.state.newPassword === ""
                  ? "Your password must be 6 or more characters long"
                  : ""}
                </Text>
              </View>

              <View style={[styles.textInput, { marginTop: 20 }]}>
                <Text style={styles.text}>CONFIRM PASSWORD</Text>
                <TextField
                  value={this.state.confirmPassword}
                  name="confirmPassword"
                  secureTextEntry
                  onChangeText={(value) =>
                    this.setState({ confirmPassword: value })
                  }
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
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default ChangePassword;
