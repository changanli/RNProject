import React,{Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Button
} from 'react-native';

import {connect} from 'react-redux';
import {login} from '../../redux/actions/user';
import Constants from '../../utils/constants';
import SignInputItem from '../../components/signInputItem';
import RadiusButton from '../../components/radiusButton';


class Login extends Component {
    static navigationOptions=({navigation})=>({
        headerTitle:'登录',
        gesturesEnabled:false, //禁止侧滑返回
        //自定义返回按钮
        headerLeft:<Text
         style={{color:'white',fontSize:30,marginLeft:10,lineHeight:30}}
         onPress={()=>navigation.goBack()}
         >x</Text>
    })
    constructor(props){
        super(props)
        this.state = {
            phone:'',
            password:''
        }
    }
    render(){
        return (<View style={styles.container}>
            <Image style={styles.logo} source={require('../../static/images/logo.png')}/>
            <SignInputItem
             leftImage = {require('../../static/images/person.png')}
             placeholder="请输入手机号码"
             maxLength={11}
             autoCorrect={false} 
             autoFocus={true}
             keyboardType="numeric"
             clearButtonMode = {"while-editing"}
             //
             onChangeText={(text)=>this.setState({...this.state,phone:text})}
            />
            <SignInputItem
             leftImage = {require('../../static/images/pass.png')}
             placeholder="请输入密码"
             maxLength={18}
             autoCorrect={false} 
             autoFocus={true}
             clearButtonMode = {"while-editing"}
             onChangeText={(text)=>this.setState({...this.state,password:text})}
             secureTextEntry={true}
            />
           <RadiusButton 
           title="登 录"
           viewStyle={styles.viewStyle}
           textStyle={styles.textStyle}
           onPress={()=>this._login()}
           />
           <Text 
           style={styles.register}
           onPress = {()=>this.props.navigation.navigate('Register',{mode:'card'})}
           >注册</Text>
        </View>)
    }

    _login(){
        if(!(/^1[\d]{10}$/g).test(this.state.phone)){
            console.log('手机号格式不正确')
            return
        }
        if(this.state.password.length < 6 || this.state.password.length > 18){
            console.log('请输入6-18位的密码');
            return
        }
        const {login} = this.props

        global.post('/user/login',{
            phone:this.state.phone,
            password:this.state.password
        }).then(response=>{
            login(response.data)
            this.props.navigation.goBack()
        }).catch(error=>{
            console.log(error)
        })
        console.log('登录');
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },
    logo:{
        marginTop:60,
    },
    viewStyle:{
        marginTop:20,
        width:Constants.screen.width*0.8,
        height:45,
        borderRadius:20,
        backgroundColor:Constants.color.themeColor
    },
    textStyle:{
        color:'white',
        fontSize:20
    },
    register:{
        marginTop:20,
        fontWeight:'bold',
    }
});
const mapStateToProps = (state)=>{
    return state.user
} //把state.user映射到Home的props属性上面
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        login:(data)=>dispatch(login(data))
    }
} //把action映射到Home的props属性上面
export default connect(mapStateToProps,mapDispatchToProps)(Login);