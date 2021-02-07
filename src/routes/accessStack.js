import {createStackNavigator} from 'react-navigation-stack';
import AccessList from '../modules/grantAccess/AccessList/AccessList';
import GrantAccess from '../modules/grantAccess/GrantAccess/GrantAccess';
import ViewAccess from '../modules/grantAccess/ViewAccess/ViewAccess';

const screen={
AccessList:{
    screen: AccessList,
    navigationOptions:{
        headerShown:false
    }
},
GrantAccess:{
    screen: GrantAccess,
    navigationOptions:{
        headerShown:false
    }
},
ViewAccess:{
    screen: ViewAccess,
    navigationOptions:{
        headerShown:false
    }
}

}
const accessStack = createStackNavigator(screen);

export default accessStack;