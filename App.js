import { createStackNavigator } from 'react-navigation';
import React from "react";
import Test from "./src/screens/Test";
import HomeScreen from "./src/screens/HomeScreen";
import Header from "./src/components/header";


class AppNavigation extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
}
const NavParameters = createStackNavigator(
    {
        Home: HomeScreen,
        Test: Test,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTitle: <Header/>,
            headerStyle: {
                backgroundColor: '#444444',
            }
        }
    });

export default NavParameters;