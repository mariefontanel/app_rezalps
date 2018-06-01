
import React, { Component } from 'react';
import Header from './src/components/header';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View,
    Button,
    Alert,
    TextInput,


} from 'react-native';


//React navigation
import {
    StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
    Home: { screen: Header },
    // Test: { screen: testscreen },
});




export class UselessTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { email:'Email', Password: 'Mot de passe' };
    }

    render() {
        return (
            <View style= {styles.loginArea}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 7,}}
                    onChangeText={(email) => this.setState({email})}
                    placeHolder={'Email'}
                    value={this.state.email}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(Password) => this.setState({Password})}
                    placeHolder={'Mot de passe'}
                    value={this.state.Password}
                />
            </View>
        );
    }
}

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class Accueil extends Component {
    render() {

        return (
            <View style={{ flex:1, }}>

                <Header />

                <View style={{flex: 2, flexDirection: 'row', justifyContent:'space-around', marginTop: 5, marginBottom: 5,}}>
                    <Image source={require('./public/img/social_work.png')} style={styles.imgIntro} />
                    <Image source={require('./public/img/recrutement.png')} style={styles.imgIntro} />
                    <Image source={require('./public/img/link.png')} style={styles.imgIntro} />
                </View>
                <View style={{flex: 3, flexDirection: 'row', justifyContent:'space-around', marginTop: 15, marginBottom: 7,}}>
                    <Text>Apprendre</Text>
                    <Text>Recruter</Text>
                    <Text>Rencontrer</Text>
                </View>

                <View style={{flex: 4, flexDirection: 'row', marginTop: 5,}}>
                    <ScrollView>
                        <Text style={styles.postsIndex}>
                            Ici seront les 5 derniers posts du réseau rezalps !
                        </Text>
                    </ScrollView>
                </View>

                <View style={{flex: 5, flexDirection: 'column', justifyContent:'space-around', marginTop: 5, marginBottom: 5,}}>

                    <UselessTextInput />
                </View>


                <View style={{flex: 6, flexDirection: 'column', justifyContent:'space-around', marginTop: 5, marginBottom: 5, marginLeft: 25,
                    marginRight: 25,}}>

                    <Button
                        style={styles.button}
                        onPress={() => {
                            Alert.alert('Pas encore de connexion dsl');
                        }}
                        title="Inscription"
                        color="#ea4c89"
                        borderColor= "#ea4c89"

                        borderRadius= "2"
                        // accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                        style= {styles.button}
                        onPress={() => {
                            Alert.alert('Bientôt disponible...');
                        }}
                        title="Login"
                        color="#ea4c89"
                        // accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#f5f8fa',
    },


    imgIntro: {
        height: 50,
        width: 50,
    },
    postsIndex: {
        backgroundColor: 'grey',
        marginBottom: 5,
        marginLeft: 1,
        marginRight:1,
        height: 100,
    },
    loginArea: {
        marginLeft: 25,
        marginRight: 25,

    },
    // Doesn't work here, but work directly in the button.
    button:  {
        // elevation: 4,
        // Material design blue from https://material.google.com/style/color.html#color-color-palette
        backgroundColor: '#ea4c89',
        borderColor : '#ea4c89',
        borderRadius: 2,

        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: '#007AFF',
        textAlign: 'center',
        padding: 8,
        fontSize: 18,
        fontWeight: '500',
    },

});
