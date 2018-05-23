/* @flow */

import React, { Component } from 'react';
import { StyleSheet, NetInfo, View, Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import Orientation from 'react-native-orientation';

import configureStore from './conf/redux/index';

import { AppLoading } from 'AppComponent';
import { DEVICE_TYPE } from 'AppSetting'
import { applicationStyle } from 'AppTheme'

import './conf/index'
import { PersistGate } from 'redux-persist/es/integration/react'
import NavigationApp from './router/NavigationApp'

const { persistor, store } = configureStore()
const onBeforeLift = () => {
  console.debug(':onBeforeLift: called')
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }


  onComplete = (error, store) => {
    this.setState({ isLoading: false });
  }

  componentWillMount() {
    const initial = Orientation.getInitialOrientation();
  }

  componentDidMount = () => {
    StatusBar.setBarStyle('light-content', true);
    switch(DEVICE_TYPE) {
      case 'tablet': {
        Orientation.lockToLandscapeRight();
        break;
      }
      case 'phone': {
        Orientation.lockToPortrait();
        break;
      }
      default: {
        Orientation.lockToPortrait();
      }
    }
  }

  renderApp() {
    return (
      <Provider store={store} style={styles.container}>
        <PersistGate
          loading={<AppLoading />}
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
          <NavigationApp />

        </PersistGate>
      </Provider>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderApp()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...applicationStyle.mainCon
  },
});

export default App;
