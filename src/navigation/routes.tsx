import {GetStarted} from "../screens"
import {createStackNavigator} from "react-navigation-stack"
import {createBottomTabNavigator} from "react-navigation-tabs"
import AuthScreen from "../screens/AuthScreen/AuthScreen";

export const SplashScreen = createStackNavigator(
    {
        GetStarted,
        AuthScreen
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);
