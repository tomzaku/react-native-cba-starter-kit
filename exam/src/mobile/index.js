/* @flow */

console.disableYellowBox = true;

import configureStore from './conf/redux/index';
// import Main from './main'
// import NavigatorApp from './config/navigation/';
import Orientation from 'react-native-orientation';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { CFLoading } from 'AppComponent';
import { DEVICE_TYPE } from 'AppSetting'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { StyleSheet, NetInfo, View, Platform } from 'react-native';
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
          loading={<CFLoading />}
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
  },
});

export default App;
