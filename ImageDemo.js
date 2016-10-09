import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

class WjjPro extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source = {require('./img/sample.jpg')} style = {{ width : 230, height : 300}}/>
          <Image source = {{uri : 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1476000555&di=7342e1243b37283a884404996cff1ecf&src=http://img4.duitang.com/uploads/item/201508/11/20150811213806_RS2mM.jpeg'}} style = {{ width : 230 , height : 220}}/>
          <Image style = {{ width : 230, height : 230}} source={require('image!timg')} >
              <Text>在里面</Text>
          </Image>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WjjPro', () => WjjPro);
