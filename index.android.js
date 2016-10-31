import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    BackAndroid,
    ToastAndroid
} from 'react-native';

import Button from 'react-native-button'
import Login from './pages/login.android';

var _navigator;

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
