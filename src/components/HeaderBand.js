// HeaderBand

import React from 'react';
import { View } from 'react-native';

const HeaderBand = () => {
	const { viewStyle } = styles;

	return (
		<View>
			<View style={viewStyle} backgroundColor='powderblue' />
			<View style={viewStyle} backgroundColor='skyblue' />
			<View style={viewStyle} backgroundColor='steelblue' />
		</View>
	);
};

const styles = {
	viewStyle: {
		height: 5,
	}
};

export default HeaderBand;
