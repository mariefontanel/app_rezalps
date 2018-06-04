
import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Test from "../../screens/Test";
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View,
    Button

} from 'react-native';
import {InputLogin} from "../../components/Login";

export default class HomeScreen extends Component {
    render() {
        return (

            <View style={{flex:1}}>

                <KeyboardAwareScrollView //To keep the input on top of the keyboard, not hidden.
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                >

                    <View style={{flex: 2, flexDirection: 'row', justifyContent:'space-around', marginTop: 5, marginBottom: 5,}}>
                        <Image source={require('../../assets/img/social_work.png')} style={styles.imgIntro} />
                        <Image source={require('../../assets/img/link.png')} style={styles.imgIntro} />
                        <Image source={require('../../assets/img/recrutement.png')} style={styles.imgIntro} />
                    </View>

                    <View style={{flex: 3, flexDirection: 'row', justifyContent:'space-around', marginTop: 15, marginBottom: 7,}}>
                        <Text>Apprendre</Text>
                        <Text>Rencontrer</Text>
                        <Text>Recruter</Text>
                    </View>

                    <View style={{flex: 4, flexDirection: 'row', marginTop: 5,}}>
                        <ScrollView>
                            <Text style={styles.postsIndex}>
                                Ici seront affichés les 5 derniers posts du réseau rezalps !
                                Lorem ipsum
                            </Text>
                        </ScrollView>
                    </View>
                    <InputLogin style={styles.loginArea}/>

                    <View style={{flex: 5, flexDirection: 'column', justifyContent:'space-around', marginTop: 5, marginBottom: 5, marginLeft: 25,
                        marginRight: 25,}}>

                        <View style={{ marginBottom:10 }}>
                            <Button
                                style={{  }}
                                onPress={() => {
                                    navigate('Test');
                                }}
                                title="Inscription"
                                color="#ea4c89"
                                borderColor= "#ea4c89"
                                borderRadius= "2"
                                // accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        <Button
                            style= {styles.button}
                            onPress={() => {
                                this.props.navigation.navigate('Test');
                            }}
                            title="Login"
                            color="#ea4c89"
                            // accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#f9f9f9',
    },
    imgIntro: {
        height: 50,
        width: 50,
    },
    postsIndex: {
        backgroundColor: 'lightgrey',
        marginBottom: 15,
        height: 100,
    },
    loginArea: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,

    },

});
