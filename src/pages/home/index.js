import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Constants from '../../utils/constants';

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
            </View>
        )
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
       color:Constants.themeColor
    }
});