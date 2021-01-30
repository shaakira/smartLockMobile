import {createStackNavigator} from 'react-navigation-stack';
import AccessList from '../modules/grantAccess/AccessList/AccessList';

const screen={
AccessList:{
    screen: AccessList,
    navigationOptions:{
        headerShown:false
    }
},


}
const accessStack = createStackNavigator(screen);

export default accessStack;