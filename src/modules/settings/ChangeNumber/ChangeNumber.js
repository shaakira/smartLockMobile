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
import styles from "./ChangeNumber.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";
import PhoneInput from "react-native-phone-number-input";


class ChangeNumber extends React.Component {
  state = {
    phoneNumber:"",
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
   
  };
  onCloseModal = () => {
    this.setState({ modalVisibility: false });
  };
  onOpenModal = () => {
    this.setState({ modalVisibility: true });
  };
  render() {
      const disabled=this.state.phoneNumber==="";
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Change Number</Text>
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
                <Text style={styles.text}>MOBILE NUMBER</Text>
                <PhoneInput
                defaultCode="LK"
                placeholder="Enter your mobile #"
                textContainerStyle={styles.textContainerStyle}
                value={this.state.phoneNumber}
                onChangeText={(value) => {
                  this.setState({ phoneNumber: value });
                }}
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
        <BottomModal
          visibility={this.state.modalVisibility}
          title={"Are you sure you want to change your number to "+this.state.phoneNumber}
          primaryTitle="SAVE"
          onClose={this.onCloseModal}
          isDanger={false}
        />
      </View>
    );
  }
}

export default ChangeNumber;
