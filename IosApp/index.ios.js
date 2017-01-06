/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import LoginView from './app/views/LoginView'

export default class IosApp extends Component {
  render() {
    let initialRoute = {
      title: 'Login',
      component: LoginView
    }

    return (
      <NavigatorIOS
        navigationBarHidden={true}
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={initialRoute}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
AppRegistry.registerComponent('IosApp', () => IosApp);
