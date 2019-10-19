import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {SplashScreen} from "./routes";

export default createAppContainer(
    createSwitchNavigator({
        SplashScreen
    }))
