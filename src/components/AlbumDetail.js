// AlbumDetail Component
// March 4, 2018

// Purpose: display card for a single album

import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

	const { album } = props;

	return (
		<Card>	
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>
	);
};

export default AlbumDetail;
