import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/color';

const styles = StyleSheet.create({
  defaultContainerStyle: {},
  defaultDisabledInputStyle: {},
  defaultErrorLabelStyle: {
    fontSize: '36.5rem',
  },
  defaultInputStyle: {
    color: colors.font.darkText,
    fontSize: '56.5rem',
  },
  defaultLabelStyle: {
    fontSize: 14,
    color: colors.font.lightText,
    fontWeight:'600'
  },
  defaultInputContainerStyle: {
    borderBottomColor: 'red',
  },
  errorInputContainerStyle: {
    borderBottomColor: 'red',
  },
  defaultLeftIconContainerStyle: {},
  defaultRightIconContainerStyle: {},
});

export default styles;
