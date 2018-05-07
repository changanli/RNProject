/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Router from './src/router'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {

    // return (
    //   <Provider store={store}>
    //     <AppWithNavigationState />
    //   </Provider>
    // );

    return (
      <View style={styles.container}>
      <StatusBar
      hidden = {false} //是否隐藏状态栏
      barStyle = {'light-content'} //状态栏颜色设置为白色，仅支持iOS
      // backgroundColor={'red'} Android设备上状态栏的背景颜色
      // translucent={true} 设置状态栏是否为透明。 当状态栏的值为 true 的时候，应用将会在状态栏下面进行绘制显示。这样在 Android 平台上面就是沉浸式的效果，可以达到 Android 和 iOS 应用显示效果的一致性。
      />
      <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }
});

/**
  React Native 在 Android 平台为 StatusBar 组件提供了一个静态常量 currentHeight，我们可以通过读取这个常量来得到 Android 手机状态栏的高度。
  注意：currentHeight 不是一个属性，我们直接访问 StatusBar.currentHeight 就可以了。

  1，Android 手机状态栏
（1）当状态栏呈现在 Andorid 手机屏幕顶部时，它会占用顶部这个空间，我们只能使用剩下的屏幕空间。也就是说如果从第 0 行开始放置组件时，组件会紧贴着状态栏的下边沿显示。
（2）要想知道实际可用的屏幕高度，可以通过手机屏幕的高度减去状态栏高度得到。

2，iOS 手机状态栏
（1）在 iOS 平台上，取得的屏幕高度就是实际可使用的高度。
（2）如果从第 0 行开始排列组件时，组件会紧贴着手机屏幕的最上沿显示。如果状态栏没有被隐藏，它将覆盖在第 0 行组件的上方。
（3）如果不想设置状态栏隐藏，则应当空出状态栏的显示区域。但可以为这个区域设置背景色，以使整个界面风格统一。
  */