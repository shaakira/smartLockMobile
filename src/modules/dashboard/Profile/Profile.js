import React from "react";
import axios from "axios";
import menu from "../../../../assets/hamburger.png";
import edit from "../../../../assets/edit.png";
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
import styles from "./Profile.style";
import TextField from "../../../components/TextField/TextField";
import { Button } from "react-native-elements";
import BottomModal from "../../../components/BottomModal/BottomModal";

class Profile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    modalVisibility: false,
  };
  navigation = this.props.navigation;

  handleChange = (text) => {
    return (name) => {
      const user = { ...this.state.user };
      user[name] = text;
      this.setState({ user });
    };
  };
  handleSubmit = async () => {
  
 
  };
  onCloseModal = () => {
    this.setState({ modalVisibility: false });
  };
  onOpenModal = () => {
    this.setState({ modalVisibility: true });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => this.navigation.openDrawer()}>
            <Image source={menu} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.navigation.navigate("EditProfile")} >
            <Image source={edit} style={styles.editStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Profile</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.bottomContainer}
        >
          <ScrollView
            style={styles.keyboardAwareContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={{marginTop:30}}>
            <View style={styles.textInput}>
              <Text style={styles.text}>FIRST NAME</Text>
              <TextField
                value={this.state.firstName}
                name="firstName"
                editable={false}
              />
            </View>

            <View style={styles.textInput}>
              <Text style={styles.text}>LAST NAME</Text>
              <TextField
                value={this.state.lastName}
                name="lastName"
                editable={false}
              
              />
            </View>

            <View style={styles.textInput}>
              <Text style={styles.text}>EMAIL</Text>
              <TextField
                value={this.state.email}
                name="email"
                editable={false}

              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.text}>MOBILE NUMBER</Text>
              <TextField
                value={this.state.email}
                name="phone"
                editable={false}

              />
            </View>
            </View>
            
            
            <Button
            icon={{
              name: "lock",
              size: 20,
              color: "white"
            }}
              title="CHANGE PASSWORD"
              buttonStyle={styles.buttonStyle}
              iconRight
            />
             <View style={styles.btnContainer}>
              <Button
                icon={{
                  name: "logout",
                  size: 20,
                  color: "red"
                }}
                title="LOGOUT"
                buttonStyle={styles.btmBtn}
                titleStyle={styles.btnText}
                onPress={this.onOpenModal}
                iconRight
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <BottomModal
         visibility={this.state.modalVisibility}
         title="Are you sure you want to logout?"
         primaryTitle="LOGOUT"
         onClose={this.onCloseModal}
         isDanger={true}/>
      </View>
    );
  }
}

export default Profile;
