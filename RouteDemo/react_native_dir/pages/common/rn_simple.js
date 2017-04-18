import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    ToastAndroid,
    BackAndroid,
} from 'react-native';
var nav;
var title;
var id;

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

export default class Simple extends Component {
    constructor(props) {
        super(props);
        nav = this.props.nav;
        title = this.props.title;
        id = this.props.id;
    }

    render() {
        return (
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        color: 'green'
                    }}>我是传来的 {id}</Text>
                <Text>我是标题文字 {title}</Text>
            </View>
        )
    }
}