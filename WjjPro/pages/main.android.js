import React, { Component, Navigator } from 'react';
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
import Touch from './touch.android';
import Button from 'react-native-button'
var titleStr;
var _navigator;
var name;
//返回键监听行为
BackAndroid.addEventListener('hardwareBackPress', function () {
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

    //常规点击事件调用
    //常规的概念：手指在控件区域内按下，手指在控件区域内离开
    _textOnPress() {
        ToastAndroid.show('  这是一个可点击的Text', ToastAndroid.SHORT)
    }
    //手指在控件区域内按下，无论离不离开都立即调用
    _textOnPressIn() {
        ToastAndroid.show('  PressIn被触发', ToastAndroid.SHORT)
    }
    //手指在控件区域按下，无论在不在控件区域内离开都会被调用
    _textOnPressOut() {
        ToastAndroid.show('  OnPressOut被触发', ToastAndroid.SHORT)
    }
    //手指在控件区域内按下持续一定时间，手指在控件区域内离开（时间可自定义）
    _textOnLonePress() {
        ToastAndroid.show('这是一个长按波纹Text', ToastAndroid.SHORT)
    }
    //按下去没有ui反馈，但是回调已经触发
    _textNoFeedbackOnPress() {
        ToastAndroid.show('这是一个按下去没有实际效果的Text', ToastAndroid.SHORT)
    }
    _jumpToTouch() {
        ToastAndroid.show('跳转到下一个页面', ToastAndroid.SHORT)
        _navigator.push({
            component: Touch,
            passProps: {
                title: 'Touch',
                id: 'Touch',
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text>{titleStr}
                    页面 获得的参数: value = {name}
                </Text>
                <TouchableHighlight
                    onPress={this._textOnPress}
                    onPressIn={this._textOnPressIn}>
                    <Text style={{ marginTop: 20 }}>
                        这是一个可点击的Text还响应了OnPressIn
                  </Text>
                </TouchableHighlight>
                {/* android md风格的动画效果，需要在外层套一个view不然，波纹扩散到哪去？  */}
                <TouchableNativeFeedback
                    onLongPress={this._textOnLonePress}
                    onPressOut={this._textOnPressOut}>
                    <View style={{ width: 150, height: 28, backgroundColor: 'red', marginTop: 20 }}>
                        <Text>
                            这是一个长按波纹Text
                    </Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback
                    onPress={this._textNoFeedbackOnPress}>
                    <View style={{ marginTop: 20 }}>
                        <Text >
                            这是一个没有点击效果的Text
                    </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Button onPress={this._jumpToTouch} style={{
                    fontSize: 20,
                    color: 'green'
                }} styleDisabled={{
                    color: 'red'
                }}>
                    jumpToTouch
                </Button>
            </View>
        );
    }
}

AppRegistry.registerComponent('Main', () => Main);
