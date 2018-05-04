import React,{Component} from 'react';

import {
    View,
    Text
} from 'react-native';

export default class Boy extends Component {
    render(){
        console.log(JSON.stringify(this.props))
        return (
            <View>
                <Text>{this.props.navigation.state.params.words}</Text>
            </View>
        );
    }
}