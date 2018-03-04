// AlbumList Component
// March 4, 2018

/* 
	Purpose:
	1. fetch list of albums
	    	url:  http://rallycoding.herokuapp.com/api/music_albums
	2. render several AlbumDetail components
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

	componentWillMount() {
		

	}

	render() {
		return (
			<View>
				<Text>Album List!!</Text>
			</View>
		);
	}
}

export default AlbumList;
