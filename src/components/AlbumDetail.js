// AlbumDetail Component
// March 4, 2018

// Purpose: display card for a single album

import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

	console.log('props =', props);

	const { 
		title, 
		artist, 
		image, 
		thumbnail_image,
		url,
	} = props.album;

	const { 
		headerContentStyle,
		headerTextStyle, 
		thumbnailStyle, 
		thumbnailContainerStyle,
		imageStyle
	} = styles;

	return (

		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
						style={thumbnailStyle}
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>
						{title}
					</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image
					style={imageStyle}
					source={{ uri: image }}
				/>
			</CardSection>

			<CardSection>
				<Button url={url} />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
		borderRadius: 2
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
