import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import Constants from '../../utils/constants';
import {setToken,getToken,removeToken} from '../../utils/auth';

export default class Home extends Component {

    static navigationOptions=({navigation})=>({
        headerTitle:'首页',
    })

    render(){
        return (
            <View style={styles.container}>
                <Text 
                style={styles.text}
                onPress={()=>this.props.navigation.navigate('Boy',{words:'你好,Boy!'})}
                >首页</Text>
                <Button
                title="保存"
                onPress={()=>setToken('测试token存储')}
                />
                <Button
                title='获取Token'
                onPress = {()=>{token = getToken().then(value=>console.log(value))}}
                />
                <Button
                title='移除Token'
                onPress={()=>removeToken()}
                />
            </View>
        )
    }

    componentDidMount(){
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    text:{
       fontSize:20,
       color:Constants.color.themeColor
    }
});