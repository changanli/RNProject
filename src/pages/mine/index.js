import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import {loginOut} from '../../redux/actions/user';

import Constants from '../../utils/constants';
import ListItemArrow from '../../components/listItemArrow';
import ListItemInfo from '../../components/listItemInfo';

const dataSource = []
class Mine extends Component {

    static navigationOptions=({navigation})=>({
        title:'我的',
        headerLeft:null
    })
    _sections=[
        {
        key:'0', //指定section的key,用于区分不同的section
        data:[
            {key:'0',title:'未登录',subtitle:'点击登录/注册',routeName:'Login',image:require('../../static/images/my_feedback_28x28_.png')},
        ],
        },
        {   key:'1',
            data:[
                {key:'0',title:'联系我们',routeName:'FeedBack',image:require('../../static/images/my_feedback_28x28_.png')},
                {key:'1',title:'清理缓存',routeName:'',image:require('../../static/images/my_cache_28x28_.png')},
                {key:'2',title:'关于',routeName:'About',image:require('../../static/images/my_about_28x28_.png')},
                {key:'3',title:'退出登录',routeName:'',image:require('../../static/images/my_about_28x28_.png')}
            ],
        }
    ]

    render(){
       
        return (
            <View style={styles.container}>
            <SectionList
            style={styles.flatlist}
            sections={
                this._sections
            }
            renderItem={(info)=>{ console.log(info); return this._renderItem(info)}}
            />
            </View>
        )
    }

    _renderItem(info){
        
       return(info.section.key == '0' ?<ListItemInfo
            style={{marginTop:20,marginBottom:20}}
            title = {info.item.title}
            subtitle={info.item.subtitle}
            leftImage={info.item.image}
            onPress={()=>this.props.navigation.navigate(info.item.routeName,{mode:'modal'})}
        />:<ListItemArrow 
                style={{marginBottom:10}}
                title={info.item.title}
                leftImage={info.item.image}
                //
                onPress={()=> {
                    if(info.item.key == '3'){
                        const {loginOut} = this.props;
                        loginOut()
                        alert('退出登录成功');
                    }else{
                        this.props.navigation.navigate(info.item.routeName,{mode:'card'})
                    }
                }} 
        />)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        color:Constants.color.themeColor,
        fontSize:20,
        position:'absolute'
    },
    flatlist:{
        flex:1,
        width: Constants.screen.width
    }
});
const mapDispatchToState=(dispatch)=>{
    return {
        loginOut:()=>dispatch(loginOut())
    }
}
export default connect(state=>state.user,mapDispatchToState)(Mine);