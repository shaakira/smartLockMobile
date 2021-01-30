import {createStackNavigator} from 'react-navigation-stack';
import AddDevice from '../modules/device/AddDevice/AddDevice';

const screen={
AddDevice:{
    screen: AddDevice,
    navigationOptions:{
        headerShown:false
    }
},


}
const deviceStack = createStackNavigator(screen);

export default deviceStack;