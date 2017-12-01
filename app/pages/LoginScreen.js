import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';
import SignupSection from '../components/SignupSection';
import Toaster from '../utility/toast/Toaster'
import ToastStyles from '../utility/toast/ToastStyles'

export default class LoginScreen extends React.Component {
	constructor (props) {
		super(props)
		this.state = { message: null }
	
		const messages = [
		  { text: 'FYI' },
		  { text: 'Hooray!', styles: ToastStyles.success },
		  { text: 'Eek', styles: ToastStyles.warning },
		  { text: 'Oh noe!', styles: ToastStyles.error }
		]
	
		// Send each message 1 second apart
		/*
		messages.forEach((message, i) => {
		  setTimeout(() => this.setState({ message }), i * 1000)
		})
		*/
	  }
	
	render() {
		return (
			<Wallpaper>
				<Toaster message={{text:'Input UserName and Pass',styles:ToastStyles.error}} />
				<Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}
