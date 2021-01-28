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




const CodeVerification = () => {
  const handleOnFulfill = (code: string): void => {

  };

  return (
    <View style={styles.container}>

      <View style={styles.innerContainer}>
        <TouchableOpacity >
          <Image source={arrow} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
      <Text style={styles.topText}>OTP Verification</Text>
      <Text style={styles.headerTxt}>Check your SMS messages.We've sent you the PIN at 0776068444</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomContainer} >
        <ScrollView
          style={styles.keyboardAwareContentContainer}
          showsVerticalScrollIndicator={false} >
          <View style={styles.textInput}>
            <Text style={styles.label}>VERIFICATION CODE</Text>
            <CodeInputField
              handleOnFulfill={handleOnFulfill} />
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
  );

};

export default CodeVerification;

