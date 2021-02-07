import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../modules/auth/WelcomeScreen/WelcomeScreen";
import MobileScreen from "../modules/auth/MobileScreen/MobileScreen";
import LoginScreen from "../modules/auth/Login/Login";
import CodeVerification from "../modules/auth/CodeVerification/CodeVerification";
import Register from "../modules/auth/Register/Register";
import Home from "../modules/dashboard/Home/Home";

const screen = {
  WelcomeScreen: {
    screen:
      JSON.parse(localStorage.getItem("user")) === null ? WelcomeScreen : Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  MobileScreen: {
    screen: MobileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  CodeVerification: {
    screen: CodeVerification,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
};
const landingStack = createStackNavigator(screen);

export default landingStack;
