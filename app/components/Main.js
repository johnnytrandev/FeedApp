import React, { Component } from 'react';
import {
	Router,
	Scene,
	Actions,
	ActionConst } from 'react-native-router-flux';

// import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import MainScreen from '../pages/MainScreen'
import LoginScreen from '../pages/LoginScreen'
import SplashPage from '../pages/SplashPage'

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="mainScreen"
	          component={MainScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}
