// This package for run progress at begining
// Example: You can using redux with this file

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { authentication } from 'AppAction';
import { ThemeColor } from 'AppTheme';

import getStackNavigator from '@conf/navigation/index';
import MainScreen from './MainScreen'

class NavigatorApp extends Component {
  componentWillMount() {
  }
  render() {
    const { isAuthenticated } = this.props;
    const LoginContainer = getStackNavigator('Login');
    // const LoginContainer = getStackNavigator('Main');
    if (!isAuthenticated) {
      return <LoginContainer />;
    }
    return <MainScreen />
  }
}

NavigatorApp.propTypes = {
  isAuthenticated: PropTypes.bool,
};


const mapStateToProp = state => ({ isAuthenticated: state.authentication.isAuthenticated });
const NavigatorAppRedux = connect(mapStateToProp)(NavigatorApp);

export default NavigatorAppRedux;
