import React from "react";
import clock from "../../../../assets/clock.png";
import hamburger from "../../../../assets/hamburger.png";
import lock from "../../../../assets/lock.png";
import unlock from "../../../../assets/unlock.png";

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
import styles from "./Home.styles";

class Home extends React.Component {
    navigation=this.props.navigation
    openMenu=()=>{
        this.navigation.openDrawer();
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={this.openMenu}>
            <Image source={hamburger} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={clock} style={styles.menuStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.parent}>
          <View style={styles.child}>
            <Text style={styles.topText}>HOME</Text>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={styles.leftContainer}>
              <Image source={lock} style={styles.imgStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={styles.rightContainer}>
              <Image source={unlock} style={styles.imgStyle} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Home;
