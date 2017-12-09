import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View } from 'react-native';
import App from './App';
// import Main from './app/components/Main';
import {Main} from './main'
import SplashPage from './app/pages/SplashPage'
import WFMain from './app/components/WFMain'


// export default class loginAnimation extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Main />
//       </View>
//     );
//   }
// }

export default class NewsDemo extends React.Component {
  render() {
    return (
        <Main/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Feed', () => NewsDemo);
