// AlbumList Component
// March 4, 2018

/* 
	Purpose:
	1. fetch list of albums
	    	url:  https://rallycoding.herokuapp.com/api/music_albums
	2. render several AlbumDetail components
*/

import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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

	displayAlbums(albums) {
		return albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		const { albums } = this.state;

		const styles = {
			containerStyle: {
				backgroundColor: '#fff',
				marginTop: 30
			},
			textStyle: {
				color: 'steelblue',
				fontSize: 16,
				textAlign: 'center'
			}
		};

		if (albums.length > 0) { 
			return (
				<ScrollView style={styles.containerStyle}>
					{ this.displayAlbums(albums) }
				</ScrollView>
			);
		}
		return (
			<ScrollView style={styles.containerStyle}>
				<Text style={styles.textStyle}>Loading Albums</Text>
			</ScrollView>
		);
	}
}

export default AlbumList;
