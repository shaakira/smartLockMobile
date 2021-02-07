import React from "react";
import axios from "axios";
import menu from "../../../../assets/hamburger.png";
import add from "../../../../assets/plus.png";

import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./AccessList.styles";
import AccessItem from "../../../components/AccessItem/AccessItem";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    firstName: "Shaakira",
    lastName: "Mubarak",
    accessType: "Always",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    firstName: "Idrees",
    lastName: "Nafly",
    accessType: "Recurring",
    accessDays:["Mon","Fri"],
    startTime:"13:00",
    endTime:"18:00"
    
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    firstName: "Sidra",
    lastName: "Moulana",
    accessType: "Temporary",
    phoneNumber:"771234578",
    accessDate:"8 Feb 2021",
    accessTime:"18:30"
  },
];
class AccessList extends React.Component {
  navigation = this.props.navigation;

  render() {
    const renderItem = ({ item }) => (
      <AccessItem
        guest={item}
        onPress={() => {
          this.navigation.navigate("ViewAccess", item);
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
        <Text style={styles.topText}>ACCESS LIST</Text>
        <View style={styles.bottomContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={separator}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            backgroundColor: "#01394a",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
          }}
          onPress={() => {
            this.navigation.navigate("GrantAccess");
          }}
        >
          <Image
            source={add}
            style={{ width: 30, height: 30, tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default AccessList;
