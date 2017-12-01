import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import WFMain from '../components/WFMain'  
export default class MainScreen extends Component {
    render() {
      return (
          <WFMain/>
      );
    }
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  });
  