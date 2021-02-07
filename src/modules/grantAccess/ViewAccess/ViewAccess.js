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
  FlatList,
} from "react-native";
import styles from "./ViewAccess.styles";
import TextField from "../../../components/TextField/TextField";
import color from "../../../styles/color";
import PhoneInput from "react-native-phone-number-input";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";
import Modal from "react-native-modal";

class ViewAccess extends React.Component {
  navigation = this.props.navigation;
  state = {
    firstName: this.navigation.getParam("firstName"),
    lastName: this.navigation.getParam("lastName"),
    accessType: this.navigation.getParam("accessType"),
    phoneNumber: this.navigation.getParam("phoneNumber"),
    accessTime: this.navigation.getParam("accessTime"),
    accessDate: this.navigation.getParam("accessDate"),
    accessDays: this.navigation.getParam("accessDays"),
    startTime: this.navigation.getParam("startTime"),
    endTime: this.navigation.getParam("endTime"),
    modalVisibility: false,
    visibility: false,
    currentPassCode: "",
    newPassCode: "",
  };
  navigation = this.props.navigation;
  onCloseModal = () => {
    this.setState({ modalVisibility: false });
  };
  onOpenModal = () => {
    this.setState({ modalVisibility: true });
  };
  render() {
    const renderItem = ({ item }) => (
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          borderColor: "#e6c405",
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 5,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "#e6c405" }}>{item}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.goBack()}>
            <Image source={arrow} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>View Access</Text>
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
                  <TextField value={this.state.firstName} editable={false} />
                </View>
              </View>
              <View style={styles.textStyle}>
                <View style={{ marginRight: 20 }}>
                  <Text style={styles.text}>LAST NAME</Text>
                  <TextField value={this.state.lastName} editable={false} />
                </View>
              </View>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.text}>ACCESS TYPE</Text>
              <TextField value={this.state.accessType} editable={false} />
            </View>
            {this.state.accessType === "Recurring" ? (
              <View>
                <View style={styles.textStyle}>
                  <View
                    style={{ flex: 1, marginHorizontal: 20, marginTop: -25 }}
                  >
                    <Text style={styles.text}>ACCESS DAY(S)</Text>
                    <View>
                      <FlatList
                        data={this.state.accessDays}
                        renderItem={renderItem}
                        horizontal={true}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.innerContainer}>
                  <View style={{ flex: 1, marginTop: 20 }}>
                    <View style={{ marginLeft: 20 }}>
                      <Text style={styles.text}>START TIME</Text>
                      <TextField
                        value={this.state.startTime}
                        editable={false}
                      />
                    </View>
                  </View>
                  <View style={{ flex: 1, marginTop: 20 }}>
                    <View style={{ marginRight: 20 }}>
                      <Text style={styles.text}>END TIME</Text>
                      <TextField value={this.state.endTime} editable={false} />
                    </View>
                  </View>
                </View>
                <View style={styles.textStyle}>
                  <TouchableOpacity onPress={this.onOpenModal}>
                    <Text
                      style={{ marginLeft: 30, fontSize: 16, color: "#bd0606" }}
                    >
                      REMOVE ACCESS
                    </Text>
                  </TouchableOpacity>
                  <Button
                    title="CHANGE PASS CODE"
                    buttonStyle={styles.buttonStyle}
                    onPress={() => {
                      this.setState({ visibility: true });
                    }}
                  />
                </View>
              </View>
            ) : this.state.accessType === "Always" ? (
              <View style={styles.textStyle}>
                <TouchableOpacity onPress={this.onOpenModal}>
                  <Text
                    style={{ marginLeft: 30, fontSize: 16, color: "#bd0606" }}
                  >
                    REMOVE ACCESS
                  </Text>
                </TouchableOpacity>

                <Button
                  title="CHANGE PASS CODE"
                  buttonStyle={styles.buttonStyle}
                  onPress={() => {
                    this.setState({ visibility: true });
                  }}
                />
              </View>
            ) : this.state.accessType === "Temporary" ? (
              <View>
                <View style={{ flex: 1 }}>
                  <View style={styles.textInput}>
                    <Text style={styles.text}> MOBILE NUMBER</Text>
                    <PhoneInput
                      defaultCode="LK"
                      placeholder=" "
                      textContainerStyle={styles.textContainerStyle}
                      value={this.state.phoneNumber}
                      containerStyle={{ width: "100%" }}
                      editable={false}
                    />
                  </View>
                </View>

                <View style={styles.innerContainer}>
                  <View style={styles.textStyle}>
                    <View style={{ marginLeft: 20 }}>
                      <Text style={styles.text}>ACCESS DATE</Text>
                      <TextField
                        value={this.state.accessDate}
                        editable={false}
                      />
                    </View>
                  </View>
                  <View style={styles.textStyle}>
                    <View style={{ marginRight: 20 }}>
                      <Text style={styles.text}>ACCESS TIME</Text>
                      <TextField
                        value={this.state.accessTime}
                        editable={false}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.textStyle}>
                  <TouchableOpacity onPress={this.onOpenModal}>
                    <Text
                      style={{ marginLeft: 30, fontSize: 16, color: "#bd0606" }}
                    >
                      REMOVE ACCESS
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View></View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
        <BottomModal
          visibility={this.state.modalVisibility}
          title="Are you sure you want to remove access?"
          primaryTitle="REMOVE"
          onClose={this.onCloseModal}
        />
        <Modal
          isVisible={this.state.visibility}
          style={{ margin: 0 }}
          onBackdropPress={() => {
            this.setState({ visibility: false });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change Pass Code</Text>
              <View style={{ height: 1, backgroundColor: "#e6e4e4" }} />
              <Text style={styles.modalInnerText}>
                To change password, please enter current device password new
                device password
              </Text>

              <View>
                <Text style={styles.text}>CURRENT PASS CODE</Text>
                <TextField
                  secureTextEntry
                  value={this.state.currentPassCode}
                  onChangeText={(value) =>
                    this.setState({ currentPassCode: value })
                  }
                  maxLength={4}
                  keyboardType="numeric"
                  returnKeyType="done"
                />
              </View>
              <View>
                <Text style={styles.text}>NEW PASS CODE</Text>
                <TextField
                  secureTextEntry
                  value={this.state.newPassCode}
                  onChangeText={(value) =>
                    this.setState({ newPassCode: value })
                  }
                  maxLength={4}
                  keyboardType="numeric"
                  returnKeyType="done"
                />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ visibility: false });
                  }}
                >
                  <Text style={styles.cancelBtn}>Cancel</Text>
                </TouchableOpacity>
                <Button title="SAVE" buttonStyle={styles.modalButtonStyle} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ViewAccess;
