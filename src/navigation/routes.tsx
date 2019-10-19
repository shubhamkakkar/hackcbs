import {createBottomTabNavigator} from "react-navigation-tabs"
import {GetStarted, AuthScreen} from "../screens"
import {createStackNavigator} from "react-navigation-stack"

export const SplashScreen = createStackNavigator(
    {
        // GetStarted,
        AuthScreen
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);
