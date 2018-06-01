
import React, { Component } from 'react';
import Header from './src/header';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View,
    Button


} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

// const App = StackNavigator({
//     accueil: { screen: AccueilScreen },
//     test: { screen: testscreen },
// });



const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
    render() {

        return (
            <View style={styles.container}>
                {/*header importé*/}
                <Header />

                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around', marginTop: 5, marginBottom: 5,}}>
                    <Image source={require('./public/img/social_work.png')} style={styles.imgIntro} />
                    <Image source={require('./public/img/recrutement.png')} style={styles.imgIntro} />
                    <Image source={require('./public/img/link.png')} style={styles.imgIntro} />
                </View>
                <View style={{flex: 2, flexDirection: 'row', justifyContent:'space-around', marginTop: 4, marginBottom: 7,}}>
                    <Text>Apprendre</Text>
                    <Text>Recruter</Text>
                    <Text>Rencontrer</Text>
                </View>

                <ScrollView>
                    <Text style={styles.postsIndex}>
                        Ici seront les 5 derniers posts du réseau rezalps !
                    </Text>
                </ScrollView>
                {/*<view style={{flex: 3, flexDirection: 'row', justifyContent:'space-around', marginTop: 5, marginBottom: 5,}}>*/}
                {/*<Button*/}
                    {/*style = {styles.button}*/}
                    {/*onPress={}*/}
                    {/*title="Inscription"*/}
                    {/*color="#841584"*/}
                    {/*accessibilityLabel="Learn more about this purple button"*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*style = {styles.button}*/}
                    {/*onPress={}*/}
                    {/*title="Login"*/}
                    {/*color="#841584"*/}
                    {/*accessibilityLabel="Learn more about this purple button"*/}
                {/*/>*/}
                {/*</view>*/}



            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F5FCFF',
    },
    intro: {
        flexDirection: 'row',
    },
    imgIntro: {
        height: 50,
        width: 50,
    },
    postsIndex: {
        backgroundColor: 'blue',
        marginBottom: 5,
        height: 150,
    },
    avatars: {
        width: 193,
        height: 210,
    },
    button: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    }
});
