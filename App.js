/**
 *
 */
import React, { Component } from 'react';
import Header from './src/header';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View,


} from 'react-native';



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
                <View style={{flex: 2, flexDirection: 'row', justifyContent:'space-around', marginTop: 5, marginBottom: 5,}}>
                    <text>partage</text>
                    <text>recrutement</text>
                    <text>lien</text>
                </View>

                <ScrollView>
                    <Text style={styles.postsIndex}>
                        Welcome to Rezalps!
                    </Text>
                </ScrollView>
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
        avatars:{
        width: 193,
        height: 210,
    },
    });
