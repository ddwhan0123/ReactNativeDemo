/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet,View } from 'react-native';



class WjjPro extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.style2}>
					<Text>Hi Wjj1!  </Text>
					<Text>Hi Wjj2!  </Text>
				</View>
				<View style={[styles.style3,{flexDirection: 'column'}]}>
					<Text style={styles.style3}>Hello Wjj1!</Text>
					<Text style={styles.style3}>Hello Wjj2!</Text>
				</View>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
	},style2:{
		justifyContent: 'center',
    	alignItems: 'center',
		margin: 20,
		flexDirection: 'row',
		backgroundColor: '#EEFCAF',
		flex: 2,
	},style3:{
		margin: 20,
		backgroundColor: '#F5FCFF',
		flex: 5,
	}
});

AppRegistry.registerComponent('WjjPro', () => WjjPro);
	