import React,{Component} from 'react';

import {
    View,
    Text
} from 'react-native';

export default class Girl extends Component {
    render(){
        console.log(JSON.stringify(this.props.navigation))
        return (
            <View>
                <Text>{this.props.navigation.state.params.words}</Text>
            </View>
        );
    }
}