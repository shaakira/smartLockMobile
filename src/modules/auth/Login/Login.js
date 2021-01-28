import React , { useState }from 'react';
import axios from "axios";
import arrow from '../../../../assets/back.png';
import {
  Text, View, StatusBar, Image, Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView
} from 'react-native';
import styles from './Login.styles';
import TextField from '../../../components/TextField/TextField';
import { Button } from 'react-native-elements';
import Toast, {DURATION} from 'react-native-easy-toast'



class Login extends React.Component {
  state={
    email:"",password:""
  }

  onSubmit =async()=>{
    const user={email:this.state.email,password:this.state.password}
    await axios
      .post('http://192.168.1.103:5000/user/login', user)
      .then((response) => {
        if (response.status === 200) {
          this.toast.show('Success',2000);
         
         
      }})
  }
render(){
  return (
    <View style={styles.container}>

      <View style={styles.innerContainer}>
        <TouchableOpacity >
          <Image source={arrow} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
      <Text style={styles.topText}>Welcome back!</Text>
      <Text style={styles.headerTxt}>Sign in to your account</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomContainer} >
        <ScrollView
          style={styles.keyboardAwareContentContainer}
          showsVerticalScrollIndicator={false} >


          <View style={styles.textStyle}>
            <View style={styles.textInput}>
              <Text style={styles.text}>EMAIL</Text>
              <TextField value={this.state.email} onChangeText={(value)=>this.setState({email:value})} />
            </View>
          </View>
          <View style={styles.textInput}>
            <Text style={styles.text}>PASSWORD</Text>
            <TextField secureTextEntry  value={this.state.password} onChangeText={(value)=>this.setState({password:value})}/>
          </View>
          <Button
            title="CONTINUE"
            buttonStyle={styles.buttonStyle}
            onPress={this.onSubmit}
          />
           <Toast
                ref={(toast) => this.toast = toast}
                style={{backgroundColor:'green',borderRadius:50,marginBottom:100}}
                position='bottom'
                positionValue={300}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{color:'white'}}
            />
          < View style={styles.btnContainer} >
            <Button title="OOPS...I DON'T HAVE AN ACCOUNT" buttonStyle={styles.btmBtn} titleStyle={styles.btnText} />
          </View>
         
        </ScrollView>

      </KeyboardAvoidingView>

    </View>
  );
}
  

};

export default Login;

