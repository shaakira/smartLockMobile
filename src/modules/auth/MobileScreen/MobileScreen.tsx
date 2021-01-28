import React from 'react';
import close from '../../../../assets/close.png';

import {
    Text, View, StatusBar, Image, Animated, TouchableOpacity, KeyboardAvoidingView,
    Platform, ScrollView
} from 'react-native';
import styles from './MobileScreen.styles';
import PhoneInput from 'react-native-phone-number-input';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const MobileScreen = () => {
    return (<View style={styles.container} >
        <View style={styles.innerContainer}>
            <TouchableOpacity>
                <Image source={close} style={styles.imageStyle} />
            </TouchableOpacity>
        
        </View>
        <Text style={styles.topText}>Welcome!</Text>
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.bottomContainer} >
            <ScrollView
                style={styles.keyboardAwareContentContainer}
                showsVerticalScrollIndicator={false} >
                <View style={styles.mobileStyle}>
                    <Text style={styles.text}> MOBILE NUMBER</Text>

                    < PhoneInput
                        defaultCode="US"
                        placeholder='Enter your mobile #'
                        textContainerStyle={styles.textContainerStyle}
                    />
                </View>
                <Button
                    title="NEXT"
                    buttonStyle={styles.buttonStyle}
                  
                />
                < View style = { styles.btnContainer } >
    <Button title="SIGN IN WITH EMAIL" buttonStyle = { styles.btmBtn } titleStyle={styles.btnText}/>
      </View> 
            </ScrollView>

        </KeyboardAvoidingView>

    </View>
    );
};
export default MobileScreen;