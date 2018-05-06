import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';

import Constants from '../../utils/constants';
import RadiusButton from '../../components/radiusButton';

export default class Register extends Component {
    static navigationOptions=({navigation})=>({
        headerTitle:'注册'
    })

    render(){
        return(<View style={styles.container}>
            <Image style={styles.logo} source={require('../../static/images/logo.png')} />
            <View style={styles.inputContainer}>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>手机号:</Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="请输入手机号码"
                    maxLength={11}
                    autoCorrect = {false} //自动拼写
                    autoFocus = {true} //在componentDidMount后会获得焦点
                    keyboardType="numeric" //弹出纯数字键盘
                    clearButtonMode = {"while-editing"} //是否要在文本框右侧显示“清除”按钮。ios属性
                    />
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>验证码:</Text>
                    <TextInput
                    style = {styles.inputYanZhenMa}
                    placeholder="请输入验证码"
                    autoCorrect = {false} //自动拼写
                    autoFocus = {true} //在componentDidMount后会获得焦点
                    clearButtonMode = {"while-editing"} //是否要在文本框右侧显示“清除”按钮。ios属性
                    />
                    <RadiusButton
                    viewStyle={styles.inputYanZhenMaBtn}
                    textStyle = {{color:'white'}}
                    title = "获取验证码"
                    />
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>密码:</Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="请输入密码"
                    maxLength={18}
                    autoCorrect = {false} //自动拼写
                    autoFocus = {true} //在componentDidMount后会获得焦点
                    clearButtonMode = {"while-editing"} //是否要在文本框右侧显示“清除”按钮。ios属性
                    />
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>确认密码:</Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="请输入确认密码"
                    maxLength={18}
                    autoCorrect = {false} //自动拼写
                    autoFocus = {true} //在componentDidMount后会获得焦点
                    clearButtonMode = {"while-editing"} //是否要在文本框右侧显示“清除”按钮。ios属性
                    />
                </View>
            </View>
            <RadiusButton 
            title="提交"
            viewStyle={styles.viewStyle}
            textStyle={styles.textStyle}
            />
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    logo:{
        marginTop:50,
        width:Constants.screen.width * 0.8
    },
    inputContainer:{
        marginTop:20
    },
    inputItem:{
        flexDirection:'row',
        backgroundColor:'white',
        height:40,
        width:Constants.screen.width,
        alignItems:'center',
        borderBottomColor:'#e1e1e1',
        borderBottomWidth:1
    },
    inputYanZhenMa:{
        width:Constants.screen.width * 0.5,
        marginLeft:10
    },
    inputYanZhenMaBtn:{
        backgroundColor:Constants.color.themeColor,
        width:100,
        height:30,
        borderRadius:5
    },
    input:{
        width:Constants.screen.width * 0.7,
        marginLeft:10
    },
    inputTitle:{
        marginLeft:10,
        color:'#323232',
        fontWeight:'bold'
    },
    viewStyle:{
        marginTop:20,
        width:Constants.screen.width * 0.8,
        height:45,
        backgroundColor:Constants.color.themeColor,
        borderRadius:10
    },
    textStyle:{
        color:'white',
        fontSize:20,
       
    }
})