import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableHighlight,
    Navigator,
    BackAndroid,
} from 'react-native';
import Simple from './rn_simple';
var { NativeModules } = require('react-native');

var nav;

//返回键监听行为
BackAndroid.addEventListener('hardwareBackPress', function () {
    if (nav == null) {
        return false;
    }
    if (nav.getCurrentRoutes().length === 1) {
        return false;
    }
    nav.pop();
    return true;
});

export default class Home extends Component {
    constructor(props) {
        super(props);
        nav = this.props.navigator;
        this._handlePress = this._handlePress.bind(this);
    }

    _handlePress() {
        ToastAndroid.show('跳转RN页面', ToastAndroid.SHORT)
        nav.push({
            component: Simple,
            passProps: {
                title: 'Simple',
                id: '10011',
            }
        });
    }

    componentWillMount() {
        console.log('--->Home componentWillMount');
    }

    componentDidMount() {
        console.log('--->Home componentDidMount');
        //进行从Activity中获取数据传输到JS
        NativeModules.IntentModule.getDataFromIntent((msg) => {
            console.log('getDataFromIntent = ' + msg);
            ToastAndroid.show('JS界面:从Activity中传输过来的数据为:' + msg, ToastAndroid.SHORT);
            if (msg === '1024') {
                this._handlePress();
            }
        },
            (result) => {
                ToastAndroid.show('JS界面:错误信息为:' + result, ToastAndroid.SHORT);
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    我是RN首页
        </Text>
                <MyButton
                    onPress={() => {
                        NativeModules.IntentModule.StartActivityFromRN("com.routedemo.activity.SecondActivity", "我是RN首页过来的参数信息.456");
                    }}
                    text="即将跳转原生页面"
                ></MyButton>
                <MyButton
                    onPress={this._handlePress}
                    text="即将跳转RN页面"></MyButton>
            </View>
        );
    }
}

export class MyButton extends Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor="#a5a5a5"
                style={styles.button}
                onPress={this.props.onPress}>
                <Text style={styles.titleText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
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
    button: {
        margin: 5,
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});