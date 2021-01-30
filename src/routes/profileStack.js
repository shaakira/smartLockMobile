import {createStackNavigator} from 'react-navigation-stack';
import EditProfile from '../modules/dashboard/EditProfile/EditProfile';
import Profile from '../modules/dashboard/Profile/Profile';

const screen={
Profile:{
    screen: Profile,
    navigationOptions:{
        headerShown:false
    }
},
EditProfile:{
    screen:EditProfile,
    navigationOptions:{
        headerShown:false
    }
}


}
const profileStack = createStackNavigator(screen);

export default profileStack;