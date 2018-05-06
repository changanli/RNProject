import React,{Component} from 'react';
import {
    Text,
    View,
    Modal
} from 'react-native';

export default class Login extends Component {
    static navigationOptions=({navigation})=>({
        headerTitle:'登录',
        gesturesEnabled:false, //禁止侧滑返回
        //自定义返回按钮
        headerLeft:<Text
         style={{color:'white',fontSize:30,marginLeft:10,lineHeight:30}}
         onPress={()=>navigation.goBack()}
         >x</Text>
    })
    render(){
        return (<View>
            <Text>登录注册</Text>
        </View>)
    }
}

