import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button'
import Login from './pages/Login.android';

export default class WjjPro extends Component {
  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  /**
   * 渲染场景, 通过不同参数, 设置不同页面
   * @param route 路由, 场景信息
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  //renderScene(route, navigator) {
  //  if (route.name == 'FirstPage') {
  //    return <FirstPage navigator={navigator} {...route.passProps}/>
  //  } else if (route.name == 'SecondPage') {
  //    return <SecondPage navigator={navigator} {...route.passProps}/>
  //  }
  //}

  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{component: Login}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    title: {
        fontSize: 25
    }
});

AppRegistry.registerComponent('WjjPro', () => WjjPro);
