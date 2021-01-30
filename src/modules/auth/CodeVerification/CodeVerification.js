import React from 'react';
import arrow from '../../../../assets/back.png';
import {
  Text, View, StatusBar, Image, Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView
} from 'react-native';
import styles from './CodeVerification.styles';
import TextField from '../../../components/TextField/TextField';
import { Button } from 'react-native-elements';
import CodeInputField from '../../../components/CodeInput/CodeInputField';




class CodeVerification extends React.Component{
 navigation=this.props.navigation
  handleOnFulfill = (code) => {

  };
  render(){

  return (
    <View style={styles.container}>

      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={()=> this.navigation.goBack()}>
          <Image source={arrow} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
      <Text style={styles.topText}>OTP Verification</Text>
      <Text style={styles.headerTxt}>Check your SMS messages.We've sent you the PIN at {this.navigation.getParam('phoneNumber')}</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomContainer} >
        <ScrollView
          style={styles.keyboardAwareContentContainer}
          showsVerticalScrollIndicator={false} >
          <View style={styles.textInput}>
            <Text style={styles.label}>VERIFICATION CODE</Text>
            <CodeInputField
              handleOnFulfill={this.handleOnFulfill} />
          </View>



          <Button
            title="VERIFY NOW"
            buttonStyle={styles.buttonStyle}

          />
          <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text style={styles.btnText}>Don't you have any code?</Text>
            <TouchableOpacity>
              <Text style={styles.resendTex}>RESEND CODE</Text>
            </TouchableOpacity>

          </View>


        </ScrollView>

      </KeyboardAvoidingView>

    </View>
  );}

};

export default CodeVerification;

