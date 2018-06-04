
import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Header from "../components/header";

export class Test extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
           <View>
            <Header />

            <Text>Hello world!</Text>
           </View>
        );
    }
}

export default Test;