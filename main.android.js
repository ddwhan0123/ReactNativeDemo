import React, {Component, Navigator} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
    BackAndroid,
    Platform
} from 'react-native';
var titleStr;
var _navigator;
var name;

BackAndroid.addEventListener('hardwareBackPress', function() {
    if (_navigator == null) {
        return false;
    }
    if (_navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    if (Platform.OS === 'android') {
        _navigator.pop();
    }
    return true;
});

export default class Main extends Component {
    constructor(props) {
        super(props);
        _navigator = this.props.navigator;
        titleStr = this.props.titleStr;
        name = this.props.name;
    }
    render() {
        return (
            <View>
                <Text>{titleStr}
                    页面 获得的参数: value = {name}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Main', () => Main);
