import React from "react";
import axios from "axios";
import menu from "../../../../assets/hamburger.png";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./AddDevice.styles";
import Pulse from "react-native-pulse";
import Modal from "react-native-modal";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import DeviceItem from "../../../components/DeviceItem/DeviceItem";

const DATA = [
  {
    id: "[B8:27:EB:B3:E0:46]",
    name: "Device 1",
  },
];

class AddDevice extends React.Component {
  state = {
    modalVisible: false,
  };
  navigation = this.props.navigation;

  onAddDevicePress = () => {};

  render() {
    const renderItem = ({ item }) => (
      <DeviceItem
        device={item}
        onPress={() => {
          this.navigation.navigate("ViewDevice", item);
        }}
      />
    );
    const separator = () => (
      <View style={{ height: 1, backgroundColor: "#f0f0f0", margin: 10 }} />
    );
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.openDrawer()}>
            <Image source={menu} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Devices</Text>
        <View style={styles.bottomContainer}>
          {DATA.length === 0 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                marginTop: -90,
              }}
            >
              <Pulse
                color="#e4e6e6"
                numPulses={3}
                diameter={500}
                speed={20}
                duration={2000}
              ></Pulse>
              <TouchableOpacity
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: "#01394a",
                  borderRadius: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  this.setState({ modalVisible: true });
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>ADD DEVICE</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={separator}
            />
          )}
        </View>

        <Modal
          isVisible={this.state.modalVisible}
          style={{ margin: 0 }}
          onBackdropPress={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add Device</Text>
              <View style={{ height: 1, backgroundColor: "#e6e4e4" }} />
              <Text style={styles.modalInnerText}>
                To add a device, please enter device name and device password
              </Text>

              <View style={styles.textInput}>
                <Text style={styles.text}>DEVICE NAME</Text>
                <TextField
                  value={this.state.deviceName}
                  onChangeText={(value) => this.setState({ deviceName: value })}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.text}>DEVICE PASSWORD</Text>
                <TextField
                  secureTextEntry
                  value={this.state.devicePassword}
                  SSSS
                  onChangeText={(value) =>
                    this.setState({ devicePassword: value })
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
                <Button title="ADD" buttonStyle={styles.buttonStyle} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default AddDevice;
