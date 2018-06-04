import { createStackNavigator } from 'react-navigation';
import React from "react";
import Test from "./src/screens/Test";
import HomeScreen from "./src/screens/HomeScreen/index";
import Header from "./src/components/header";

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        header: null,
        navigationOptions:{
            headerTitle: <Header/>,
        },

    Test: {
        screen: 'Test',   //bonne syntaxe à trouver pour que la navigation fonctionne
        header: null,
        navigationOptions:{
            headerTitle: <Header/>,
        }
    }

},});
