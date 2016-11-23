import React, {Component, Navigator} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
    BackAndroid,
    Platform,
    ToastAndroid,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
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
        _navigator.pop();
    return true;
});

export default class Main extends Component {
    constructor(props) {
        super(props);
        _navigator = this.props.navigator;
        titleStr = this.props.titleStr;
        name = this.props.name;
    }

    _textOnPress(){
      ToastAndroid.show('  这是一个可点击的Text', ToastAndroid.SHORT)
    }

    _textOnPressIn(){
      ToastAndroid.show('  PressIn被触发', ToastAndroid.SHORT)
    }

    _textOnPressOut(){
      ToastAndroid.show('  OnPressOut被触发', ToastAndroid.SHORT)
    }

    _textOnLonePress(){
      ToastAndroid.show('这是一个长按波纹Text', ToastAndroid.SHORT)
    }

    _textNoFeedbackOnPress(){
        ToastAndroid.show('这是一个按下去没有实际效果的Text', ToastAndroid.SHORT)
    }

    render() {
        return (
            <View style={{flex : 1,flexDirection : 'column'}}>
                <Text>{titleStr}
                    页面 获得的参数: value = {name}
                </Text>
                <TouchableHighlight
                  onPress={this._textOnPress}
                  onPressIn={this._textOnPressIn}>
                  <Text style={{marginTop:20}}>
                      这是一个可点击的Text还响应了OnPressIn
                  </Text>
                </TouchableHighlight>
                <TouchableNativeFeedback
                  onLongPress={this._textOnLonePress}
                  onPressOut={this._textOnPressOut}>
                  <View style={{width: 150, height: 28, backgroundColor: 'red',marginTop:20}}>
                    <Text>
                      这是一个长按波纹Text
                    </Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback
                  onPress={this._textNoFeedbackOnPress}>
                  <View style={{marginTop:20}}>
                    <Text >
                      这是一个没有点击效果的Text
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

AppRegistry.registerComponent('Main', () => Main);
