import React, {Component,} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    ToastAndroid,
} from 'react-native';
import Button from 'react-native-button'
import Main from './main.android';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            userName: ''
        }
        this._handlePress = this._handlePress.bind(this);
    }

    _handlePress() {
        let password = this.state.password
        let userName = this.state.userName

        if (password.length > 0 && userName.length > 0) {
            ToastAndroid.show('用户名 :' + userName + ' 密码 :' + password, ToastAndroid.SHORT)
            this._jump(userName);
        } else {
            ToastAndroid.show('数据缺失', ToastAndroid.SHORT)
        }
    }

    _jump(name, type = 'Normal') {
        this.props.navigator.push({
          component: Main,
          passProps: {
            name: name
          },
          type: type
        })
      }

    render() {
        return (
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style ={{
                            fontSize: 25
                        }}>
                            霸气的大标题
                        </Text>
                    </View>
                    <View style={{
                        width: 200,
                        flexDirection: 'row',
                        borderWidth: 1,
                        marginTop: 30
                    }}>
                        <Text style={{
                            marginLeft: 10,
                            alignSelf: 'center'
                        }}>
                            账号 ：
                        </Text>
                        <TextInput placeholder='input userName' onChangeText={(text) => {
                            this.setState({userName: text});
                        }} style={{
                            flex: 1,
                            height: 40,
                            width: 100
                        }}/>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        width: 200,
                        flexDirection: 'row',
                        marginTop: 10
                    }}>
                        <Text style={{
                            marginLeft: 10,
                            alignSelf: 'center'
                        }}>
                            密码 ：
                        </Text>
                        <TextInput placeholder='input password' onChangeText={(text) => {
                            this.setState({password: text});
                        }} style={{
                            flex: 1,
                            height: 40,
                            width: 100
                        }}/>
                    </View>
                    <Button onPress={this._handlePress} style={{
                        fontSize: 20,
                        color: 'green'
                    }} styleDisabled={{
                        color: 'red'
                    }}>
                        Login
                    </Button>
                </View>
            </ScrollView>
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

AppRegistry.registerComponent('Login', () => Login);
