import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import Home from './react_native_dir/pages/common/rn_home'

export default class RouteDemo extends Component {
  constructor(props) {
    super(props);
  }

  configureScenceAndroid() {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderSceneAndroid(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  render() {
    var renderScene = this.renderSceneAndroid;
    var configureScence = this.configureScenceAndroid;
    return (
      <Navigator initialRoute={{
        component: Home,
      }} configureScence={{
        configureScence
      }} renderScene={renderScene} />
    );
  }
}

AppRegistry.registerComponent('RouteDemo', () => RouteDemo);
