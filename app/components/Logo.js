import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>One Feed</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		color: '#F035E0',
		fontWeight: 'bold',
		fontSize: 40,
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});
