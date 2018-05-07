import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

import Constants from '../utils/constants'

import Home from '../pages/home/index'
import Boy from '../pages/home/Boy'
import Mine from '../pages/mine/index'
import TabBar from './tabBar/index'
import FeedBack from '../pages/mine/feedback'
import About from '../pages/mine/about'
import Login from '../pages/sign/login'
import Register from '../pages/sign/register'


/**
  forHorizontal,
  forVertical,
  forFadeFromBottomAndroid,
  forFade,
  canUseNativeDriver,
 */

 /*
    react-navigation目前只支持在全局范围内实现modal方式，不支持单独对某个页面进行modal
    可以通过自定义转场动画的方式实现
    https://germinate.github.io/2017/title-%20react-navigation%E8%87%AA%E5%AE%9A%E4%B9%89StackNavigator%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC%E5%8A%A8%E7%94%BB/
    原文的方法会出现先水平移动，后垂直移动，导致出现黑影
    改造成如下方法可暂时解决问题
    this.props.navigation.navigate('Login', {mode: 'modal'})
    this.props.navigation.navigate('Login',{mode:'card'}) 
    有一个小问题，当你modal完之后，快速点击一个card之后，modal还会出来一下，不影响使用
  */
const types={'card':'forHorizontal','modal':'forVertical'}
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    if (params.mode == undefined){
      return null;
    }
    const transition = types[params.mode]
    if(transition == undefined){
      return null
    }
    return CardStackStyleInterpolator[transition](sceneProps);
  },
});


const Router = StackNavigator({
     Home:{
        screen:TabBar,
        path:'app/Home'
      },
      Mine:{
        screen:TabBar,
        path:'app/Mine'
      },
      FeedBack:{ //反馈意见
        screen:FeedBack
      },
      About:{ //关于
        screen:About
      },
      Login:{
        screen:Login, //登录
      },
      Register:{
        screen:Register,
      },
      Boy:{
        screen:Boy
      },
  },
  {
    initialRouteName:'Home', //程序启动后显示的页面
    navigationOptions:{
        headerStyle:{backgroundColor:Constants.color.themeColor}, //统一设置导航栏背景色为红色
        headerTintColor:'white', //统一设置导航栏标题为白色
    }, 
    headerMode:'screen', //边缘滑动返回上级页面时动画效果。 screen：滑动过程中，整个页面都会返回。
    mode:'card', //定义跳转风格 card 使用iOS和安卓默认的风格。 modal：iOS独有的使屏幕从底部画出。类似iOS的present效果
    transitionConfig: TransitionConfiguration, //配置转场动画
  },
)

export default Router;