/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        let pic = {
            uri: 'https://media.licdn.com/dms/image/C4D03AQHYTxeg-1rAcw/profile-displayphoto-shrink_200_200/0?e=1528794000&v=beta&t=nfvS1b_gO8mKezmUe8E-95GEgBl-v-fmUSa4zYYUyWo'
        };
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to Rezalps!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, register !
                    </Text>
                </View>

                <Image source={pic} style={styles.avatars}/>
                <Image source={pic} style={styles.avatars}/>
                <Image source={pic} style={styles.avatars}/>
                <Image source={pic} style={styles.avatars}/>
                <Image source={pic} style={styles.avatars}/>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    avatars:{
        width: 193,
        height: 210,
    },
});
