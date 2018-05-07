import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import {connect} from 'react-redux';

import Constants from '../../utils/constants';
class Home extends Component {

    static navigationOptions=({navigation})=>({
        headerTitle:'首页',
    })

    render(){
       
        return (
            <View style={styles.container}>
                <Text 
                style={styles.text}
                onPress={()=>this.props.navigation.navigate('Boy',{words:'你好,Boy!',mode:'card'})}
                >首页</Text>
                <Button
                title="保存"
                onPress={()=>{
                    console.log(JSON.stringify(this.props))
                }}
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
const mapStateToProps = (state)=>{
    return state.user
} //把state.user映射到Home的props属性上面
const mapDispatchToProps = {} //把action映射到Home的props属性上面
export default connect(mapStateToProps,mapDispatchToProps)(Home);