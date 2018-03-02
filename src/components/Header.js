// Header Component
// Thursday, March 1, 2018
// Sec. 5, Lec. 22

import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Albums</Text>
		</View>	
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		flexDirection: 'row',
		height: 100,
		padding: 20
	},
	textStyle: {
		fontSize: 20,
		color: '#4C0099',
	}
};

export default Header;
