import React from "react";
import clock from "../../../../assets/clock.png";
import hamburger from "../../../../assets/hamburger.png";
import lock from "../../../../assets/lock.png";
import unlock from "../../../../assets/unlock.png";
import axios from "axios";
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
  state = {
    status: "",
  };
  navigation = this.props.navigation;
  openMenu = () => {
    this.navigation.openDrawer();
  };
  handleLock = async () => {
    let url=Expo.Constants.manifest.extra.myApiKey;
    await axios
      .post(`${url}/device/lock`)
      .then((res) => {
        if (res.status === 200) {
         this.setState({
           status:res.data
         })
        }
      })
      .catch((error) => {});
  };
  handleUnlock = async () => {
    let url=Expo.Constants.manifest.extra.myApiKey;
    await axios
      .post(`${url}/device/unlock`)
      .then((res) => {
        if (res.status === 200) {
         this.setState({
           status:res.data
         })
        }
      })
      .catch((error) => {});
  };
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
            <Text>status: {this.state.status}</Text>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.handleLock} disabled={this.state.status==="lock"}>
            <View style={styles.leftContainer}>
              <Image source={lock} style={styles.imgStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.handleUnlock} disabled={this.state.status==="unlock"}>
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
