import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import propTypes from 'prop-types';

export default class RadiusButton extends Component {

    static propTypes={
        title:propTypes.string.isRequired,
    }

    render(){
        return(
            <View
            style={[this.props.viewStyle,styles.container]}
            >
            <Text style={this.props.textStyle}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
});