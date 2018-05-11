// This package for run progress at begining
// Example: Run socket begin

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { authentication } from 'AppAction';
import { ThemeColor } from 'AppTheme';

import getStackNavigator from '@conf/navigation/index';
import MainScreen from './component/MainScreen'

class NavigatorApp extends Component {
  clearnApp() {
    this.props.dispatch(authentication.cleanApp());
  }
  componentWillMount() {
    this.clearnApp();
  }
  render() {
    const { isAuthenticated } = this.props;
    const LoginContainer = getStackNavigator('Login');
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
