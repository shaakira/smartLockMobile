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

class ChangeEmail extends React.Component {
  state = {
    newEmail: "",
    confirmEmail: "",
    modalVisibility: false,
  };
  navigation = this.props.navigation;

 
  handleSubmit = async () => {
      if(this.state.newEmail===this.state.confirmEmail){
        const user = {
            email: this.state.newEmail,
           
          };
      }
   
  };
  onCloseModal = () => {
    this.setState({ modalVisibility: false });
  };
  onOpenModal = () => {
    this.setState({ modalVisibility: true });
  };
  render() {
      const disabled=this.state.newEmail===""||this.state.confirmEmail===""
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
                  onChangeText={(value) => this.setState({ newEmail: value })}
                />
                 
              </View>

              <View style={[styles.textInput,{marginTop:20}]}>
                <Text style={styles.text}>CONFIRM EMAIL</Text>
                <TextField
                  value={this.state.confirmEmail}
                  name="confirmEmail"
                secureTextEntry

                  onChangeText={(value) => this.setState({ confirmEmail: value })}
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
          title={"Are you sure you want to change your email in to "+this.state.newEmail}
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
