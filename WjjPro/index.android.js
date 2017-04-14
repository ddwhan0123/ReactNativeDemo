import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Login from './pages/login.android'

export default class WjjPro extends Component {
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
        return (<Navigator initialRoute={{
            component: Login,
            title: 'first',
            id: 'first',
        }} configureScence={{
            configureScence
        }} renderScene={renderScene}/>)
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WjjPro', () => WjjPro);
