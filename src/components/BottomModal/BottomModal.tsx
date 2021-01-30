import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './BottomModal.styles';

interface CustomInputProps {
  secondaryTitle?: String;
  primaryTitle: any;
  title: String;
  onClose?: () => void;
  visibility: boolean;
  onPrimaryPress?:()=>void;
  isDanger:boolean

}

const BottomModal: React.FC<CustomInputProps> = props => {
  const {
    secondaryTitle = 'Cancel',
    primaryTitle,
    title,
    onClose,
    visibility,
    onPrimaryPress,
    isDanger=true
  } = props;


  return (
    <Modal isVisible={visibility} onBackdropPress={onClose} style={{ margin: 0 }}>
      <TouchableOpacity style={styles.container} onPress={onClose} />

      <View style={styles.bottomContainer}>
        <Text style={styles.txtStyle}>{title}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={onClose}><Text style={styles.cancelBtn}>{secondaryTitle}</Text></TouchableOpacity>
          <Button title={primaryTitle} buttonStyle={isDanger===true?styles.buttonDangerStyle:styles.buttonStyle}  onPress={onPrimaryPress}/>
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;
