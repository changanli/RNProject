import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';

import {NavigationActions} from 'react-navigation';

import Constants from '../../utils/constants';
import RadiusButton from '../../components/radiusButton';
import Service from '../../utils/doFetch';

let timer = null;
export default class Register extends Component {
    static navigationOptions=({navigation})=>({
        headerTitle:'注册',

    })
  

    constructor(props){
        super(props)
        this.state={
            phone:'',
            yanzhengma:'',
            password:'',
            repeatPwd:'',
            isGettingYanZhenMa:false,
            interval:60,
        }
    }

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
                    onChangeText={(text)=>this.setState({...this.state,phone:text})}
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
                    onChangeText={(text)=>this.setState({...this.state,yanzhengma:text})}
                    />
                    <RadiusButton
                    viewStyle={[styles.inputYanZhenMaBtn,this.state.isGettingYanZhenMa?{backgroundColor:"white",borderWidth:1,borderColor:'gray'}:{backgroundColor:Constants.color.themeColor,}]}
                    textStyle = {this.state.isGettingYanZhenMa ? {color:'gray'} :{color:'white'}}
                    title = {this.state.isGettingYanZhenMa ? `重新获取(${this.state.interval}s)` : "获取验证码"}
                    onPress={()=>this._getYanZhenMa()}
                    disabled={this.state.isGettingYanZhenMa}
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
                    onChangeText={(text)=>this.setState({...this.state,password:text})}
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
                    onChangeText={(text)=>this.setState({...this.state,repeatPwd:text})}
                    />
                </View>
            </View>
            <RadiusButton 
            title="提交"
            viewStyle={[styles.viewStyle,{backgroundColor:Constants.color.themeColor}]}
            textStyle={styles.textStyle}
            onPress={()=>this._register()}
            />
        </View>)
    }

    _register(){
        if(this.state.phone.length == 0){
            console.log('请输入手机号')
            return
        }
        if(!(/^1[\d]{10}$/g).test(this.state.phone)){
            console.log('手机号格式不正确')
            return
        }
        if(this.state.yanzhengma.length == 0){
            console.log('请输入验证码')
            return
        }
        if(this.state.password.length == 0){
            console.log('请输入密码')
            return
        }
        if(this.state.password.length < 6 || this.state.password.length > 18){
            console.log('请输入6-18位的密码');
            return
        }
        if(this.state.repeatPwd.length == 0){
            console.log('请输入确认密码')
            return
        }
        if(this.state.repeatPwd.length < 6 || this.state.repeatPwd.length > 18){
            console.log('请输入6-18位的确认密码');
            return
        }
        if(this.state.password !== this.state.repeatPwd){
            console.log('两次输入的密码不一致');
            return
        }
        console.log('phone:'+this.state.phone)
        console.log('yanzhengma:'+this.state.password)
        console.log('password:'+this.state.password)
        console.log('repeatPwd:'+this.state.repeatPwd)
        console.log(JSON.stringify(this.props.navigation))
        this.props.navigation.goBack()
        // Service.post('/user/register',{
        //     phone:this.state.phone,
        //     password:this.state.password
        // }).then((response)=>{
        //     console.log(JSON.stringify(response));

        // }).catch((error)=>{
        //     console.log(error)
        // })
    }
    _getYanZhenMa(){
      
        if(this.state.isGettingYanZhenMa == false){
            this.setState({...this.state,isGettingYanZhenMa:true})
            alert('验证码是123456')
            timer = setInterval(()=>{
                let interval = this.state.interval;
                interval--;
                if(interval == 0){
                     this.setState({...this.state,interval:60,isGettingYanZhenMa:false})
                     clearInterval(timer)
                     timer = null;
                }else{
                    this.setState({...this.state,interval})
                }
            },1000);
        }
    }

    componentWillUnmount(){
        // 卸载定时器
        clearInterval(timer)
        timer = null
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
        width:110,
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
        borderRadius:10
    },
    textStyle:{
        color:'white',
        fontSize:20,
       
    }
})