'use strict';
import React, { Component } from 'react';
import{
  AppRegistry,
  StyleSheet,
  View,
  UIManager,
  Platform,
}from 'react-native';
import * as Animatable from 'react-native-animatable';

export default  class MyCustomSquare extends Component{
  constructor(props){
        super(props);
        this.state = {
            BGColor: 'green'
        };
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  componentWillMount(){
     this._gestureHandlers = {
        //响应手势
        onStartShouldSetResponder: () => true,
        //响应滑动事件
        onMoveShouldSetResponder: ()=> true,
        onResponderGrant: ()=>{this.setState({BGColor: 'red'})},
        onResponderMove: ()=>{console.log('正在移动')},
        onResponderRelease: ()=>{this.setState({BGColor: 'green'})}
     }
  }
  render(){
    return(
      <Animatable.View style={styles.container}
        animation="zoomInUp"
        iterationCount="infinite">
            <View
              {...this._gestureHandlers}
              style={[styles.rect,{
                "backgroundColor": this.state.BGColor
              }]}></View>
          </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: 150,
    height: 150,
  },
  rect: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'orange'
  }
});
