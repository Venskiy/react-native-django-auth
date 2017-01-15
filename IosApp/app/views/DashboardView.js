import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginView from './LoginView';
import CookieManager from 'react-native-cookies'

export default class DashboardView extends Component {
  handleGoToLogin() {
    this.props.navigator.push({
      title: 'Login',
      component: LoginView
    });
  }

  render() {
    CookieManager.getAll((err, res) => console.log(res.access_token));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          I'm the second route!
        </Text>
        <Text onPress={this.handleGoToLogin.bind(this)}>Go to Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
