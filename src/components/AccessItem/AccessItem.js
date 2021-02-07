import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet } from "react-native";
export default class AccessItem extends React.Component {
  guest = this.props.guest;
  initial = this.guest.firstName.charAt(0) + this.guest.lastName.charAt(0);
  onPress = this.props.onPress;
  render() {
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={{
          height: 100,
          margin: 10,
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View style={styles.topRight}>
          <Text style={styles.initial}>{this.initial}</Text>
        </View>
        <View style={{ marginLeft: 20, justifyContent: "center" }}>
          <Text style={{ fontSize: 20 }}>
            {this.guest.firstName} {this.guest.lastName}
          </Text>
          <Text style={{ fontSize: 15, color: "#e6c405" }}>
            {this.guest.accessType}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  topRight: {
    backgroundColor: "#e8e8e8",
    height: 80,
    width: 80,
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  initial: {
    color: "white",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
  },
});
