import React from "react";
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
import styles from "./ViewDevice.styles";
import arrow from "../../../../assets/back.png";
import TextField from "../../../components/TextField/TextField";
import Modal from "react-native-modal";
import { Button } from "react-native-elements";

class ViewDevice extends React.Component {
  navigation = this.props.navigation;
  name = this.navigation.getParam("name");
  id = this.navigation.getParam("id");
  state = {
    name: this.name,
    id: this.id,
    modalVisible: false,
    currentPassword: "",
    newPassword: "",
  };

  render() {
    const disable =
      this.state.newPassword === "" || this.state.currentPassword === "";
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>View Device</Text>
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
                <Text style={styles.text}>DEVICE NAME</Text>
                <TextField value={this.state.name} editable={false} />
              </View>

              <View style={styles.textInput}>
                <Text style={styles.text}>DEVICE ID</Text>
                <TextField value={this.state.id} editable={false} />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ modalVisible: true });
              }}
            >
              <Text style={{ marginLeft: 30, color: "#bd0606", marginTop: 10 }}>
                CHANGE DEVICE PASSWORD
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
        <Modal
          isVisible={this.state.modalVisible}
          style={{ margin: 0 }}
          onBackdropPress={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change Device Password</Text>
              <View style={{ height: 1, backgroundColor: "#e6e4e4" }} />
              <Text style={styles.modalInnerText}>
                To change password, please enter current device password new
                device password
              </Text>

              <View>
                <Text style={styles.text}>CURRENT PASSWORD</Text>
                <TextField
                  secureTextEntry
                  value={this.state.currentPassword}
                  onChangeText={(value) =>
                    this.setState({ currentPassword: value })
                  }
                />
              </View>
              <View>
                <Text style={styles.text}>NEW PASSWORD</Text>
                <TextField
                  secureTextEntry
                  value={this.state.newPassword}
                  onChangeText={(value) =>
                    this.setState({ newPassword: value })
                  }
                />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Text style={styles.cancelBtn}>Cancel</Text>
                </TouchableOpacity>
                <Button title="SAVE" buttonStyle={styles.buttonStyle} disabled={disable}/>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default ViewDevice;
