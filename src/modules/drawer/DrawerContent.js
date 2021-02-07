import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import colors from "../../styles/color";

export default DrawerContent = (props) => {
  const [firstName, setFirstName] = useState(String);
  const [initial, setInitial] = useState([]);
  const [lastName, setLastName] = useState(String);
  const [email, setEmail] = useState(String);

  useEffect(() => {
    loadData();
  }, [props]);
  loadData = async () => {
    var newUser = JSON.parse(localStorage.getItem("user"));

    setFirstName(newUser.firstName);
    setLastName(newUser.lastName);
    setEmail(newUser.email);
    var s = firstName.slice(0, 1) + lastName.slice(0, 1);
    setInitial(s);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContent}>
        <View style={styles.topRight}>
          <Text style={styles.initial}>{initial}</Text>
        </View>
        <Text style={styles.topText}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>
      <View style={styles.bottomContent}>
        <DrawerNavigatorItems {...props} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  topContent: {
    flex: 3,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  bottomContent: {
    flex: 7,
  },
  topText: {
    fontSize: 22,
    color: "black",
    fontWeight: "500",
    marginTop: 20,
    textTransform: "capitalize",
  },
  emailText: {
    color: colors.font.lightText,
    marginTop: 5,
  },
  topRight: {
    marginTop: 20,
    backgroundColor: "#e8e8e8",
    height: 80,
    width: 80,
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 10,
  },
  initial: {
    color: "white",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
