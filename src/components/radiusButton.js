import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import propTypes from 'prop-types';

export default class RadiusButton extends Component {

    static propTypes={
        title:propTypes.string.isRequired,
        disabled:propTypes.bool,
        underlayColor:propTypes.string,
        onPress:propTypes.func,
    }

    render(){
        return(
            <TouchableHighlight
            disabled = {this.props.disabled || false}
            underlayColor={this.props.underlayColor || 'rgba(0,0,0,0.4)'}
            onPress = {this.props.onPress}
            style={[this.props.viewStyle,styles.container]}
            >
            <Text style={this.props.textStyle}>{this.props.title}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
});