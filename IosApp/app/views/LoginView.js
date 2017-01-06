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
import DashboardView from './DashboardView'

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleGoToDashboard() {
    this.props.navigator.push({
      title: 'Dashboard',
      component: DashboardView
    })
  }

  render() {
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
        <TouchableHighlight style={styles.button}>
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
