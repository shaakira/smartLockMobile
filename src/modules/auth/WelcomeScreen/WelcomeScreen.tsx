import React from 'react'
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import styles from'./WelcomeScreen.styles';
const WelcomeScreen = () => {
    return (<View style={{flex: 1 }}>
        <View style={{ flex: 4}}></View>
        <View style={{ flex: 2}}>

            <Button
                title="LET'S START"
                buttonStyle = { styles.buttonStyle } 
            />

        </View>
    </View>)
}
export default WelcomeScreen;