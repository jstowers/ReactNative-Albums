// AlbumDetail Component
// March 4, 2018

// Purpose: display card for a single album

import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {

	const { album } = props;

	return (
		<View>	
			<Text>{ album.title }</Text>
		</View>
	)
}

export default AlbumDetail;
