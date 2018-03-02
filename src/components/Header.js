// Header Component
// Thursday, March 1, 2018
// Sec. 5, Lec. 22

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.headerText }</Text>
		</View>	
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#4C0099',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2, 
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: '#4C0099',
	}
};

export default Header;
