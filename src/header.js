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
        <Image source={require('../public/img/logo-texte-cote-web.png')} style={styles.logo} />
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 42,
        backgroundColor: '#444444',
    },

    logo: {
        height: 40,
        width :150,
        marginLeft: 12,
        marginTop: 5,
    },
});
