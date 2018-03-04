// AlbumDetail Component
// March 4, 2018

// Purpose: display card for a single album

import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {

	const { album } = props;

	return (
		<Card>	
			<Text>{ album.title }</Text>
		</Card>
	)
}

export default AlbumDetail;
