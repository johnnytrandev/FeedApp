import Exponent from 'exponent';
import React from 'react';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  Ionicons,
} from '@exponent/vector-icons';

import Router from './app/navigation/Router';
import cacheAssetsAsync from './app/utility/cacheAssetsAsync';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./app/images/bob.png'),
          require('./app/images/cookiemonster.jpeg'),
          require('./app/images/elmo.jpg'),
          require('./app/images/me.png'),
          require('./app/images/1.jpg'),
          require('./app/images/2.jpg'),
          require('./app/images/3.jpg'),
          require('./app/images/4.jpg'),
          require('./app/images/5.jpg'),
        ],
        fonts: [
            Ionicons.font,
        ]
      });
    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
        return (
            <View style={styles.container}>
              <NavigationProvider router={Router}>
                <StackNavigation id="root" initialRoute={Router.getRoute('rootNavigation')} />
              </NavigationProvider>

                {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
                {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            </View>
        );
    } else {
      return (
        <Exponent.Components.AppLoading />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Exponent.registerRootComponent(AppContainer);
