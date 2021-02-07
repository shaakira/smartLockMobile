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
import styles from "./ChangeEmail.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";
import Toast from "react-native-easy-toast";
import color from "../../../styles/color";

class ChangeEmail extends React.Component {
  state = {
    newEmail: "",
    confirmEmail: "",
    modalVisibility: false,
    isDanger: false,
    isError: false,
  };
  navigation = this.props.navigation;

  handleSubmit = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const newUser = { email: this.state.newEmail };
    let url=Expo.Constants.manifest.extra.myApiKey;
    if (this.state.newEmail === this.state.confirmEmail) {
    
      await axios
        .post(`${url}/user/changeEmail/${user._id}`, newUser, {
          headers: { Authorization: "Bearer " + user.token },
        })
        .then((res) => {
          if (res.status === 200) {
          localStorage.setItem("user",JSON.stringify(res.data))
          this.setState({
            newEmail: "",
            confirmEmail: "",
            modalVisibility: false,
            isDanger:false
          });
            // this.toast.show("Successfully updated", 2000);
           
          }
        })
        .catch((error) => {
          this.setState({ isDanger: true });
          this.toast.show(error, 2000);
        });
    } else {
      this.setState({ isDanger: true, modalVisibility: false });
      this.toast.show(
        "Please make sure new email address and confirm email address are same",
        2000
      );
    }
  };
  onCloseModal = () => {
    this.setState({ modalVisibility: false });
  };
  onOpenModal = () => {
    this.setState({ modalVisibility: true });
  };
  render() {
    const disabled =
      this.state.newEmail === "" ||
      this.state.confirmEmail === "" ||
      this.state.isError === true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Change Email</Text>
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
                <Text style={styles.text}>NEW EMAIL</Text>
                <TextField
                  value={this.state.newEmail}
                  name="newEmail"
                  onChangeText={(value) => {
                    if (reg.test(value) === false) {
                      this.setState({ newEmail: value, isError: true });
                    } else {
                      this.setState({ newEmail: value, isError: false });
                    }
                  }}
                  errorMessage={
                    this.state.isError === true ? "Invalid Email" : ""
                  }
                  inputContainerStyle={{
                    borderBottomColor:
                      this.state.isError === true ? "red" : color.brownGrey,
                  }}
                  isError={this.state.isError}
                />
              </View>

              <View style={[styles.textInput, { marginTop: 20 }]}>
                <Text style={styles.text}>CONFIRM EMAIL</Text>
                <TextField
                  value={this.state.confirmEmail}
                  name="confirmEmail"
                  onChangeText={(value) =>
                    this.setState({ confirmEmail: value })
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
                onPress={this.onOpenModal}
                disabled={disabled}
              />
            </View>
       
          </ScrollView>
        </KeyboardAvoidingView>
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
        <BottomModal
          visibility={this.state.modalVisibility}
          title={
            "Are you sure you want to change your email in to " +
            this.state.newEmail
          }
          primaryTitle="SAVE"
          onClose={this.onCloseModal}
          isDanger={false}
          onPrimaryPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default ChangeEmail;
