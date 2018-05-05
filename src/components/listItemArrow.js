import React,{Component} from 'react';
import {
    Text,
    Image,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import Constants from '../utils/constants';

export default class ListItemArrow extends Component {
    render(){
        /*
        TouchableHighlight只支持一个子节点
        如果你希望包含多个子组件，用一个View来包装它们。
        */
        return(<TouchableHighlight  //添加点击事件
            style={this.props.style}
            onPress={()=>this.props.onPress()}
            underlayColor={"#e1e1e1"} //有触摸操作时显示出来的底层的颜色。
            >
            <View style={styles.container}>
            <Image style={styles.listItemLeftImage} source={this.props.leftImage}/>
            <Text style={styles.title}>{this.props.title}</Text>
            <Image style={styles.listItemRightImage} source={require('../static/images/IQButtonBarArrowRight.png')}/>
            </View>
        </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        height:44,
        backgroundColor:'white',
        alignItems:'center'
    },
    listItemLeftImage:{
        marginLeft:10,
        tintColor:Constants.color.themeColor
    },
    title:{
        color:'#323232',
        fontSize:20,
        left:10
    },
    listItemRightImage:{
        right:10,
        position:'absolute',
        tintColor:'lightgray' //渲染图片颜色为浅灰色
    }
})