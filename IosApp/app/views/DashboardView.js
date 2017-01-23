import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginView from './LoginView';
import CookieManager from 'react-native-cookies'

export default class DashboardView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      helloWorldResponse: '',
    }
    this.helloWorld();
  }

  handleGoToLogin() {
    this.props.navigator.push({
      title: 'Login',
      component: LoginView
    });
  }

  helloWorld() {
    const _this = this;

    CookieManager.getAll((err, res) => {
      if(!res.access_token) {
        this.setState({ helloWorldResponse: 'You are not authenticated:(' });
      }

      let headers = new Headers()
      headers.append('Authorization', `Token ${res.access_token.value}`);

      fetch(`http://localhost:8000/test/`, {
        method: 'GET',
        headers: headers,
      })
      .then(response => {
        response.json().then(response => this.setState({ helloWorldResponse: response.result }));
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.helloWorldResponse}
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
