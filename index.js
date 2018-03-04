// App Entry Point
// Thursday, March 1, 2018
// Sec. 5, Lec. 16

// Component - produces test, image, and content that is rendered on the mobile screen
// App composed of collections of components

/*
	Three Key Steps:
	1.  Import libraries to help create a component
	2.  Create a component
	3.  Render component to the device
*/

// Import libraries to help create a component (Sec. 5, Lec. 17):
// React - knows how a component should behave; knows how to
// take a bunch of components and make them work together
// React Native - knows how to take the output from a component
// and place it on the mobile screen; provides default primitve components (image, text)
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import HeaderBand from './src/components/HeaderBand';
import AlbumList from './src/components/AlbumList';

// Create a component (Sec. 5, Lec. 18)
const App = () => (
	<View>
		<Header headerText={'Albums'} />
		<HeaderBand />
		<AlbumList />
	</View>
);

// Render component to the device (Sec. 5, Lec. 19)
// Need to register at least one component to the application
// Argument 1: string name for name of app
// Argument 2: function that returns the first component to render in app

// Only the 'root' component uses 'AppRegistry'
export default AppRegistry.registerComponent('albums', () => App);
