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
		<View style={styles.style1}>
		
		<View style={[styles.style2,]}>
			<Text>
				默认位置
			</Text>
		</View>

		<View style={[styles.style2,styles.style3]}>
			<Text>
				中间
			</Text>
		</View>

		<View style={[styles.style2,styles.style4]}>
			<Text>
				最左边
			</Text>
		</View>

		<View style={[styles.style2,styles.style5]}>
			<Text>
				最右边
			</Text>
		</View>

		</View>
		);
	}
		
}

const styles=StyleSheet.create({
style1:{
	flex: 1,
	borderWidth: 1,
	},
style2:{
	borderColor: 'blue',
	borderWidth: 1,
	width: 70,
	height: 20,
	},
style3:{
	width: 50,
	height: 50,
	alignSelf:'center',
	},
style4:{
	width: 50,
	height: 30,
	alignSelf:'flex-start',
	},
style5:{
	width: 50,
	height: 25,
	alignSelf:'flex-end',
	},

});

AppRegistry.registerComponent('WjjPro', () => WjjPro);
	