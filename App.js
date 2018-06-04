import { createStackNavigator } from 'react-navigation';
import Test from "./src/screens/Test";
import HomeScreen from "./src/screens/HomeScreen/index";

export default createStackNavigator({
    Home: {
        screen: HomeScreen
    },

    Test: {
        screen: Test
    },

});
