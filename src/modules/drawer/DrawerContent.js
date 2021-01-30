import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerNavigatorItems,
} from "react-navigation-drawer";
import colors from "../../styles/color";

export default DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContent}>
      <View style={styles.topRight}><Text style={styles.initial} >SM</Text></View>
          <Text style={styles.topText}>Shaakira Mubarak</Text>
          <Text style={styles.emailText}>shaakira10@gmail.com</Text>
        
       
      </View>
      <View style={styles.bottomContent}>
          <DrawerNavigatorItems {...props}/>
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
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center'
  },
  bottomContent: {
    flex: 7,
  },
  topText: {
    fontSize: 22,
    color: "black",
    fontWeight: "500",
    marginTop:20

  },
  emailText: {
    color: colors.font.lightText,
    marginTop:5
  },
topRight:{
    marginTop: 20,
    backgroundColor:'#e8e8e8',
    height:80,
    width:80,
    borderRadius:50,
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    marginRight:10,
},
initial:{
    color:'white',
    fontSize: 36,
    fontWeight: "600",
    textAlign:'center'


}

});
