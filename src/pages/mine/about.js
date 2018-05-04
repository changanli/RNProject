import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class About extends Component {

    static navigationOptions={
        headerTitle:'关于'
    }

    render(){
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.icon}
                    source={require('../../static/images/about_head_314x314_.png')}
                />
                <Text style={styles.author}>author:李长安</Text>
                <Text style={styles.version}>version:1.0.0</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    icon:{
        marginTop:20
    },
    author:{
        color:'#323232',
        marginTop:10,
        fontSize:20
    },
    version:{
        position:'absolute',
        bottom:50,
        fontSize:20,
        color:'#323232'
    }
})