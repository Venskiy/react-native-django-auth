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
  TouchableHighlight,
  TextInput
} from 'react-native';
import DashboardView from './DashboardView';
import CookieManager from 'react-native-cookies';

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmitLogin() {
    const _this = this;
    if (this.state.username && this.state.password) {
      fetch(`http://127.0.0.1:8000/api-token-auth/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(response => {
        response.json().then(response => _this.setCookie(response.token));
      });
    }
  }

  handleGoToDashboard() {
    this.props.navigator.push({
      title: 'Dashboard',
      component: DashboardView
    })
  }

  setCookie(token) {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    CookieManager.set({
      name: 'access_token',
      value: token,
      domain: 'http://127.0.0.1:8000',
      origin: 'http://127.0.0.1:8000',
      path: '/',
      version: '1',
      expiration: date.toJSON()
    }, (err, res) => {
      this.handleGoToDashboard()
    });
  }

  render() {
    CookieManager.getAll((err, res) => console.log(res.access_token.value));
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={this.state.username}
          onChangeText={(text) => { this.setState({ username: text }) }}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(text) => { this.setState({ password: text }) }}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmitLogin.bind(this)}>
            <Text>Submit</Text>
        </TouchableHighlight>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  }
});
