import React from "react";
import { Image, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import landingStack from "./landingStack";
import profileStack from "./profileStack";
import DrawerContent from "../modules/drawer/DrawerContent";
import img from "../../assets/profile.png";
import home from "../../assets/home.png";
import access from "../../assets/key.png";
import devices from "../../assets/device.png";
import settings from "../../assets/settings.png";
import deviceStack from "./deviceStack";
import accessStack from "./accessStack";
import settingsStack from "./settingsStack";


const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: landingStack,
      navigationOptions: {
        title: "HOME",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={home}
            style={{ tintColor: tintColor, width: 20, height: 20 }}
          />
        ),
        drawerLockMode: 'locked-closed'
      },
    },
    Profile: {
      screen: profileStack,
      navigationOptions: {
        title: "PROFILE",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={img}
            style={{ tintColor: tintColor, width: 20, height: 20 }}
          />
        ),
        drawerLockMode: 'locked-closed'
      },
    },
    devices: {
      screen: deviceStack,
      navigationOptions: {
        title: "DEVICES",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={devices}
            style={{ tintColor: tintColor, width: 20, height: 20 }}
          />
        ),
        drawerLockMode: 'locked-closed'
      },
    },
    grantAccess: {
      screen: accessStack,
      navigationOptions: {
        title: "GRANT ACCESS",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={access}
            style={{ tintColor: tintColor, width: 20, height: 20 }}
          />
        ),
        drawerLockMode: 'locked-closed'
      },
    },
    settings: {
        screen: settingsStack,
        navigationOptions: {
          title: "SETTINGS",
          drawerIcon: ({ tintColor }) => (
            <Image
              source={settings}
              style={{ tintColor: tintColor, width: 20, height: 20 }}
            />
          ),
          drawerLockMode: 'locked-closed'
        },
      },
  },
  {
    contentComponent: (props) => <DrawerContent {...props} />,
    contentOptions: {
      activeBackgroundColor: "rgba(230, 196, 5, 0.2)",
      activeTintColor: "#e6c405",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 10,
      },
    },
  }
);
const styles = StyleSheet.create({
  imageStyle: {
    width: 15,
    height: 15,
  },
});
export default createAppContainer(RootDrawerNavigator);
