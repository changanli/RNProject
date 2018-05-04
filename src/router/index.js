import {StackNavigator} from 'react-navigation';
import Constants from '../utils/constants'
import Home from '../pages/home/index'
import Boy from '../pages/home/Boy'
import Girl from '../pages/mine/Girl'
import Mine from '../pages/mine/index'
import TabBar from './tabBar/index'
import FeedBack from '../pages/mine/feedback'
import About from '../pages/mine/about'

const Router = StackNavigator({
    TabBar:{
        screen:TabBar
      },
      FeedBack:{ //反馈意见
        screen:FeedBack
      },
      About:{ //关于
        screen:About
      },
      Boy:{
        screen:Boy
      },
      Girl:{
        screen:Girl
      }
  },
  {
    headerMode:'screen',
    navigationOptions:{
        headerStyle:{backgroundColor:Constants.color.themeColor}, //统一设置导航栏背景色为红色
        headerTintColor:'white', //统一设置导航栏标题为白色
    }
  },
)

export default Router;