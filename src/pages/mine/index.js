import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight
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
            <FlatList
            style={styles.flatlist}
            data={[
                {key:'联系我们',routeName:'FeedBack',image:require('../../static/images/my_feedback_28x28_.png')},
                {key:'清理缓存',routeName:'',image:require('../../static/images/my_cache_28x28_.png')},
                {key:'关于',routeName:'About',image:require('../../static/images/my_about_28x28_.png')},
            ]}
            renderItem={({item})=><ListItem 
            title={item.key}
            leftImage={item.image}
            onPress={()=>this.props.navigation.navigate(item.routeName)} 
             />}
            
            />
            <Text 
            style={styles.btn}
            onPress = {()=>this.props.navigation.navigate('Girl',{'words':'你好,Girl!'})}
            >{"去找girl"}</Text>
            </View>
        )
    }
}

class ListItem extends Component {
    render(){
        /*
        TouchableHighlight只支持一个子节点
        如果你希望包含多个子组件，用一个View来包装它们。
        */
        return(<TouchableHighlight  //添加点击事件
            style={styles.listItem}
            onPress={()=>this.props.onPress()}
            underlayColor={"#e1e1e1"} //有触摸操作时显示出来的底层的颜色。
            >
            <View>
            <Image style={styles.listItemLeftImage} source={this.props.leftImage}/>
            <Text style={styles.title}>{this.props.title}</Text>
            <Image style={styles.listItemRightImage} source={require('../../static/images/IQButtonBarArrowRight.png')}/>
            </View>
        </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        color:Constants.themeColor,
        fontSize:20,
        position:'absolute'
    },
    flatlist:{
        flex:1,
        width: Constants.screenWidth
    },
    listItem:{
        flex:1,
        height:44,
        backgroundColor:'white',
        marginTop:5,
        marginBottom:5,
        justifyContent:'center'
    },
    listItemLeftImage:{
        left:10,
        position:'absolute',
        tintColor:Constants.themeColor
    },
    title:{
        color:'#323232',
        fontSize:20,
        marginLeft:50,
        
    },
    listItemRightImage:{
        right:10,
        position:'absolute',
        tintColor:'lightgray' //渲染图片颜色为浅灰色
    }
});