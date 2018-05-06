import React,{Component} from 'react';

import {
Text,
View,
StyleSheet,
TouchableHighlight,
Image
} from 'react-native';

import propTypes from 'prop-types';

import Constants from '../utils/constants';

export default class ListItemInfo extends Component {

    static propTypes = {
        onPress:propTypes.func,
        leftImage:propTypes.number,
        title:propTypes.string,
        subtitle:propTypes.string
    }

    render(){
        return(<TouchableHighlight  //添加点击事件
            style={this.props.style}
            onPress={()=>this.props.onPress()}
            underlayColor={"#e1e1e1"} //有触摸操作时显示出来的底层的颜色。
            >
            <View style={styles.container}>
                <Image style={styles.listItemLeftImage} source={this.props.leftImage}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                </View>
                <Image style={styles.listItemRightImage} source={require('../static/images/IQButtonBarArrowRight.png')}/>
            </View>
        </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:90,
        backgroundColor:'white',
        alignItems:'center'
    },
    listItemLeftImage:{
        width:45,
        height:45,
        tintColor:Constants.color.themeColor
    },
    textContainer:{
        flexDirection:'column',
        height:45,
        width:80
    },
    title:{
       color:'#323232',
       fontSize:15,
    },
    subtitle:{
        color:'gray',
        fontSize:12,
        position:'absolute',
        bottom:0
    },
    listItemRightImage:{
        right:10,
        position:'absolute',
        tintColor:'lightgray' //渲染图片颜色为浅灰色
    }
})