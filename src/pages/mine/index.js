import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Constants from '../../utils/constants';

export default class Mine extends Component {

    static navigationOptions=({navigation})=>({
        title:'我的',
        titleStyle:{color:'red'},
    })

    render(){
        return (
            <View style={styles.container}>
                <Text 
                style={styles.text}
                onPress = {()=>this.props.navigation.navigate('Girl',{'words':'你好,Girl!'})}
                >我的</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color:Constants.themeColor,
        fontSize:20
    }
});