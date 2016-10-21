import React, {Component,Navigator} from 'react';
import {AppRegistry, View, StyleSheet, Text,} from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    componentDidMount() {
        this.setState({name: this.props.name});
    }
    render() {
        return (
            <View>
                <Text>获得的参数: value = {this.state.name}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Main', () => Main);
