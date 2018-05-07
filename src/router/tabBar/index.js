import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image,
  } from 'react-native';

import { TabNavigator,TabBarBottom } from 'react-navigation';

import Constants from '../../utils/constants';
import Home from '../../pages/home';
import Mine from '../../pages/mine';

class TabBarItem extends Component {  
  render() {  
      return(  
          <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }  
              style={ { tintColor:this.props.tintColor,width:25,height:25 } }  
          />  
      )  
  }   
}  

const TabBar = TabNavigator(
   {
      Home:{
        screen:Home,
        path:'app/Home',
        navigationOptions:({navigation})=>({
          tabBarLabel:'首页',
          tabBarIcon:({focused,tintColor})=>(
            <TabBarItem
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('../../static/images/tabBar/SY.png')}  
              selectedImage={require('../../static/images/tabBar/SY-hover.png')}  
            />
          )
        })
      },
      Mine:{
        screen:Mine,
        path:'app/Mine',
        navigationOptions:({navigation})=>({
          tabBarLabel:'我的',
          tabBarIcon:({focused,tintColor})=>(
            <TabBarItem
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('../../static/images/tabBar/WD.png')}  
              selectedImage={require('../../static/images/tabBar/WD-hover.png')}  
            />
          )
        })
      }
    },
    {
      tabBarOptions: {
        activeTintColor: Constants.color.themeColor, //渲染选中的颜色
        // inactiveTintColor: 'gray', //渲染未选中的颜色
      },
      tabBarPosition:'bottom', //TabBar在底部
      tabBarComponent:TabBarBottom, //底部TabBar
      animationEnabled:false,
      swipeEnabled:false, //不允许侧滑切换
    }
);

export default TabBar;