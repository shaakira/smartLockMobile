import React, { useRef } from "react";
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
  StyleSheet,
  FlatList,
} from "react-native";
import styles from "./GrantAccess.styles";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import color from "../../../styles/color";
import RNPickerSelect from "react-native-picker-select";
import PhoneInput from "react-native-phone-number-input";
import DateTimePicker from "@react-native-community/datetimepicker";
import MultiSelect from "react-native-multiple-select";

const items = [
  {
    id: "Mon",
    name: "Monday",
  },
  {
    id: "Tue",
    name: "Tuesday",
  },
  {
    id: "Wed",
    name: "Wednesday",
  },
  {
    id: "Thur",
    name: "Thursday",
  },
  {
    id: "Fri",
    name: "Friday",
  },
  {
    id: "Sat",
    name: "Saturday",
  },
  {
    id: "Sun",
    name: "Sunday",
  },
];
class GrantAccess extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    accessType: "",
    passCode: "",
    chosenDate: new Date(),
    show: false,
    time: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    selectedItems: [],
    phoneNumber:""
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems: selectedItems });
  };
  navigation = this.props.navigation;

  handleSubmit = async () => {};
  multiSelect = React.createRef();
  render() {
    const pickerSelectStyles = StyleSheet.create({
      inputIOS: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: color.borders.gray,
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
        marginHorizontal: 10,
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 0.5,
        borderColor: "grey",
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
      },
    });
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
          marginHorizontal:5,
          marginTop:5  
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
        <Text style={styles.topText}>Grant Access</Text>
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
                  <TextField
                    value={this.state.firstName}
                    name="firstName"
                    onChangeText={(value) =>
                      this.setState({ firstName: value })
                    }
                  />
                </View>
              </View>
              <View style={styles.textStyle}>
                <View style={{ marginRight: 20 }}>
                  <Text style={styles.text}>LAST NAME</Text>
                  <TextField
                    value={this.state.lastName}
                    name="lastName"
                    onChangeText={(value) => this.setState({ lastName: value })}
                  />
                </View>
              </View>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.text}>ACCESS TYPE</Text>
              <RNPickerSelect
                onValueChange={(value) => this.setState({ accessType: value })}
                items={[
                  { label: "Recurring", value: "Recurring" },
                  { label: "Always", value: "Always" },
                  { label: "Temporary", value: "Temporary" },
                ]}
                style={pickerSelectStyles}
                placeholder={{ label: "", value: "" }}
              />
            </View>
            {this.state.accessType === "Recurring" ? (
              <View>
                <View style={styles.textStyle}>
                  <View style={styles.textInput}>
                    <Text style={styles.text}>PASS CODE</Text>
                    <TextField
                      secureTextEntry
                      value={this.state.passCode}
                      onChangeText={(value) =>
                        this.setState({ passCode: value })
                      }
                      maxLength={4}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.textStyle}>
                  <View
                    style={{ flex: 1, marginHorizontal: 20, marginTop: -25 }}
                  >
                    <Text style={styles.text}>ACCESS DAY(S)</Text>
                    <View style={{ marginHorizontal: 10 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={this.multiSelect}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedItems}
                        selectText=" "
                        searchInputPlaceholderText="Search Days..."
                        onChangeInput={(text) => console.log(text)}
                        selectedItemTextColor="#01394a"
                        selectedItemIconColor="#01394a"
                        itemTextColor="#000"
                        displayKey="name"
                        searchInputStyle={{ color: "#CCC" }}
                        submitButtonColor="#e6c405"
                        submitButtonText="Submit"
                        styleItemsContainer={{ borderBottomColor: "white" }}
                      />
                      <View style={{height:1,backgroundColor:'gray',marginTop:-11}}/>
                    </View>

                    <View>
                      <FlatList
                        data={this.state.selectedItems}
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
                      <DateTimePicker
                        date={this.state.startTime}
                        value={this.state.startTime}
                        mode="time"
                        placeholder=" "
                        onDateChange={(time) => {
                          this.setState({ startTime: time });
                        }}
                        style={{ marginLeft: 20 }}
                      />
                    </View>
                  </View>
                  <View style={{ flex: 1, marginTop: 20 }}>
                    <View style={{ marginRight: 20 }}>
                      <Text style={styles.text}>END TIME</Text>
                      <DateTimePicker
                        date={this.state.endTime}
                        value={this.state.endTime}
                        mode="time"
                        placeholder=" "
                        onDateChange={(time) => {
                          this.setState({ endTime: time });
                        }}
                        style={{ marginLeft: 20 }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ) : this.state.accessType === "Always" ? (
              <View style={styles.textStyle}>
                <View style={styles.textInput}>
                  <Text style={styles.text}>PASS CODE</Text>
                  <TextField
                    secureTextEntry
                    value={this.state.passCode}
                    onChangeText={(value) => this.setState({ passCode: value })}
                    maxLength={4}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            ) : this.state.accessType === "Temporary" ? (
              <View>
                <View style={styles.textStyle}>
                  <View style={styles.textInput}>
                    <Text style={styles.text}> MOBILE NUMBER</Text>
                    <PhoneInput
                      defaultCode="LK"
                      placeholder=" "
                      textContainerStyle={styles.textContainerStyle}
                      value={this.state.phoneNumber}
                      onChangeText={(value) => {
                        this.setState({ phoneNumber: value });
                      }}
                      containerStyle={{ width: "100%" }}
                    />
                  </View>
                </View>

                <View style={styles.innerContainer}>
                  <View style={styles.textStyle}>
                    <View style={{ marginLeft: 20 }}>
                      <Text style={styles.text}>ACCESS DATE</Text>
                      <DateTimePicker
                        date={this.state.chosenDate} //initial date from state
                        value={this.state.chosenDate}
                        mode="date" //The enum of date, datetime and time
                        placeholder=" "
                        format="DD-MM-YYYY"
                        onDateChange={(date) => {
                          this.setState({ chosenDate: date });
                        }}
                        style={{ marginLeft: 20 }}
                      />
                    </View>
                  </View>
                  <View style={styles.textStyle}>
                    <View style={{ marginRight: 20 }}>
                      <Text style={styles.text}>ACCESS TIME</Text>
                      <DateTimePicker
                        date={this.state.time} //initial date from state
                        value={this.state.time}
                        mode="time" //The enum of date, datetime and time
                        placeholder=" "
                        onDateChange={(time) => {
                          this.setState({ time: time });
                        }}
                        style={{ marginLeft: 20 }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View></View>
            )}

            <Button
              title="GRANT ACCESS"
              buttonStyle={styles.buttonStyle}
              onPress={this.handleSubmit}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default GrantAccess;
