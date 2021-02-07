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
import styles from "./EditProfile.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";
import Toast from "react-native-easy-toast";

class EditProfile extends React.Component {
  navigation = this.props.navigation;
  firstName = this.navigation.getParam("firstName");
  lastName = this.navigation.getParam("lastName");
  state = {
    firstName: this.firstName,
    lastName: this.lastName,
    modalVisibility: false,
    isDanger: false,
  };

  handleSubmit = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    let url=Expo.Constants.manifest.extra.myApiKey;

    await axios
      .post(`${url}/user/updateProfile/${user._id}`, newUser, {
        headers: { Authorization: "Bearer " + user.token },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          this.setState({
            modalVisibility: false,
          });

          this.navigation.navigate("Profile");
        }
      })
      .catch((error) => {
      });
  };
  onCloseModal = () => {
    this.setState({ modalVisibility: false });
  };
  onOpenModal = () => {
    this.setState({ modalVisibility: true });
  };
  render() {
    const disabled =
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      (this.state.firstName === this.firstName &&
        this.state.lastName == this.lastName);
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
              <Text style={{ marginLeft: 30, color: "#bd0606", marginTop: 10 }}>
                DELETE ACCOUNT
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 30,
              }}
            >
              <Button
                title="SAVE"
                buttonStyle={styles.buttonStyle}
                onPress={this.handleSubmit}
                disabled={disabled}
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
