import React,{Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';

import Constants from '../utils/constants';

import propTypes from 'prop-types';

export default class SignInputItem extends Component {

    static propTypes = {
        placeholder:propTypes.string,
        maxLength:propTypes.number,
        autoCorrect:propTypes.bool,
        autoFocus:propTypes.bool,
        secureTextEntry:propTypes.bool,
        keyboardType:propTypes.string,
        clearButtonMode:propTypes.string,
        onChangeText:propTypes.func

    }

    render(){
        return(
        <View style={styles.signInputContainer}>
            <Image style={styles.signInputIcon} source={this.props.leftImage}/>
            <TextInput
            style={styles.signInput}
            placeholder={this.props.placeholder} //占位符
            maxLength={this.props.maxLength} //最大长度
            autoCorrect = {this.props.autoCorrect} //自动拼写
            autoFocus = {this.props.autoFocus} //在componentDidMount后会获得焦点
            secureTextEntry={this.props.secureTextEntry}
            keyboardType={this.props.keyboardType} //弹出纯数字键盘
            clearButtonMode = {this.props.clearButtonMode} //是否要在文本框右侧显示“清除”按钮。ios属性
            onChangeText={this.props.onChangeText}
            />
        </View>)
    }
}

const styles = {
    signInputContainer:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'flex-start',
        height:40,
        width:Constants.screen.width*0.8,
        borderBottomWidth:1,
        borderBottomColor:Constants.color.themeColor,
    },
    signInputIcon:{
        tintColor:Constants.color.themeColor
    },
    signInput:{
        height:40,
        width:Constants.screen.width*0.7
    }
}