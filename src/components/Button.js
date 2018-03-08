// Button Component
// March 7, 2018

import React, { Component } from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';

// Sec. 8, Lec. 51
// We pass the prop onPress (a callback function) to the Button component.
// When Button is clicked, the onPress callback is called.
// This avoids hardcoding the onPress event in this component.

// The second prop, children, is used to pass text to the Button.
// We can reference this text as props.children within the Button component
const Button = ({ onPress, children }) =>  {

	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity
			style={ buttonStyle }
			onPress={ onPress }
		>
			<Text style={textStyle}>
				{ children }
			</Text>
		</TouchableOpacity>
	);
}

const styles = {
	buttonStyle: {
		// flex = 1 => expand to fill as much content as possible
		flex: 1,
		// alignSelf => element will position itself according to flexbox rules
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	}
}

export default Button;