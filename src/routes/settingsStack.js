import {createStackNavigator} from 'react-navigation-stack';
import ChangeEmail from '../modules/settings/ChangeEmail/ChangeEmail';
import ChangeNumber from '../modules/settings/ChangeNumber/ChangeNumber';
import ChangePassword from '../modules/settings/ChangePassword/ChangePassword';
import generalSettings from '../modules/settings/generalSettings/generalSettings';

const screen={
Settings:{
    screen: generalSettings,
    navigationOptions:{
        headerShown:false
    }
},
ChangeNumber:{
    screen:ChangeNumber,
    navigationOptions:{
        headerShown:false
    }
},
ChangePassword:{
    screen:ChangePassword,
    navigationOptions:{
        headerShown:false
    }
},
ChangeEmail:{
    screen:ChangeEmail,
    navigationOptions:{
        headerShown:false
    }
}


}
const settingsStack = createStackNavigator(screen);

export default settingsStack;