// AlbumList Component
// March 4, 2018

/* 
	Purpose:
	1. fetch list of albums
	    	url:  https://rallycoding.herokuapp.com/api/music_albums
	2. render several AlbumDetail components
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

	state = {
		albums: []
	};

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(res => {
				this.setState({ albums: res.data });
			});
	}

	render() {
		if (this.state.albums.length > 0) {
			return (
				<View>
					<Text>Album List!!</Text>
				</View>
			);
		}
		return (
			<View>
				<Text>Loading Albums</Text>
			</View>
		);
	}
}

export default AlbumList;
