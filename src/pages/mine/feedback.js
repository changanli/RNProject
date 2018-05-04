import React,{Component} from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import Constants from '../../utils/constants';

export default class FeedBack extends Component {
    static navigationOptions={
        headerTitle:'反馈意见'
    }
    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.title}>请填写您的宝贵意见</Text>
            <TextInput 
            style={styles.input}
            multiline={true} //允许输入多行文字
            />
            <Text style={styles.submit}>提交</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    title:{
        marginTop:40
    },
    input:{
        marginTop:20,
        backgroundColor:'white',
        width:Constants.screenWidth*0.8,
        height:200
    },
    submit:{
        marginTop:20,
        width:Constants.screenWidth*0.8,
        height:45,
        color:Constants.themeColor,
        borderColor:Constants.themeColor,
        borderWidth:1,
        borderRadius:22.5,
        textAlign:'center',
        lineHeight:45
    }
});