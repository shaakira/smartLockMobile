import {createStackNavigator} from 'react-navigation-stack';
import AddDevice from '../modules/device/AddDevice/AddDevice';
import ViewDevice from '../modules/device/ViewDevice/ViewDevice';

const screen={
AddDevice:{
    screen: AddDevice,
    navigationOptions:{
        headerShown:false
    }
},
ViewDevice:{
    screen:ViewDevice,
    navigationOptions:{
        headerShown:false
    }
}


}
const deviceStack = createStackNavigator(screen);

export default deviceStack;