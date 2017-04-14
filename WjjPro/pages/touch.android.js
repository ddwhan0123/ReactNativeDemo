import React, {Component, Navigator} from 'react';
import {
    AppRegistry,
    StyleSheet,
    BackAndroid,
    Platform,
    Text,
    View,
    ToastAndroid,
} from 'react-native';
import MyCustomSquare from '../widget/MyCustomSquare';
import * as Animatable from 'react-native-animatable';

var _navigator;
var title;


export default class Touch extends Component{
    constructor(props){
      super(props);
      _navigator=this.props._navigator;
      title=this.props.title;
    }

    render(){
      return(
        <View style={{flex : 1, flexDirection :'column'}}>
          <Text style={{
              fontSize: 20,
              color: 'green'}}
            >{title}
              页面
          </Text>
          <MyCustomSquare/>
        <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate">Up and down you go</Animatable.Text>
        </View>

      );
    }
}
