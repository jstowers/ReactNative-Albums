// Button Component
// March 7, 2018

import React, { Component } from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';

class Button extends Component {

	constructor(props) {
		super(props);
	}


	onPress = () => {
		const { url } = this.props;

		return (
			Linking.openUrl(url)
				.catch(err => {
					console.log('An error ocurred trying to open the url: ', err);
				})
		);
	}


	render() {

		return (
			<TouchableOpacity
				onPress={ this.onPress }
			>
				<Text>Buy</Text>
			</TouchableOpacity>
		);
	};
}

export default Button;