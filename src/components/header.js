
import React from "react";
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
/**
 *
 * @returns {*}
 * @constructor
 */
const Header = () =>(

    <View style={styles.container}>
        <Image source={require('../assets/img/logo-texte-cote-web.png')} style={styles.logo} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 42,
        marginBottom: 5,
        backgroundColor: '#444444',
    },

    logo: {
        height: 40,
        width :150,
        marginLeft: 12,
        marginTop: 5,
    },
});

export default Header;
