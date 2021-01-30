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
import styles from "./EditProfile.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";

class EditProfile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    modalVisibility: false,
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
    };
  };
  onCloseModal = () => {
    this.setState({ modalVisibility: false });
  };
  onOpenModal = () => {
    this.setState({ modalVisibility: true });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Edit Profile</Text>
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
                <Text style={styles.text}>FIRST NAME</Text>
                <TextField
                  value={this.state.firstName}
                  name="firstName"
                  onChangeText={(value) => this.setState({ firstName: value })}
                />
              </View>

              <View style={styles.textInput}>
                <Text style={styles.text}>LAST NAME</Text>
                <TextField
                  value={this.state.lastName}
                  name="lastName"
                  onChangeText={(value) => this.setState({ lastName: value })}
                />
              </View>
            </View>
            <TouchableOpacity onPress={this.onOpenModal}> 
              <Text style={{ marginLeft: 30, color: "red", marginTop: 10 }}>
                DELETE ACCOUNT
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <Button
                title="CANCEL"
                buttonStyle={styles.btmBtn}
                titleStyle={styles.btnText}
                onPress={this.pressHandleRegister}
              />
              <Button
                title="SAVE CHANGES"
                buttonStyle={styles.buttonStyle}
                onPress={this.handleSubmit}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <BottomModal
          visibility={this.state.modalVisibility}
          title="Are you sure you want to delete your account?"
          primaryTitle="DELETE"
          onClose={this.onCloseModal}
        />
      </View>
    );
  }
}

export default EditProfile;
