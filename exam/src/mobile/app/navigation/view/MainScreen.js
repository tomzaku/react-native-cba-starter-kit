//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, BackHandler } from 'react-native';
import { connect } from 'react-redux';
// import { alexa } from 'AppAction';
import { metric, color, applicationStyle, font } from 'AppTheme';
import getStackNavigator from '@conf/navigation/index';

// you can run task when login success
// create a component
class MainScreen extends Component {
  componentDidMount = () => {
    // this.props.dispatch(alexa.initMQTT())


    // Hanle BackButton
    // BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    // BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  
  render() {
    const TabScreen = getStackNavigator('Main')
    return (
      <View style={styles.container}>
        <StatusBar
          // backgroundColor={color.STATUSBAR}
          // barStyle="light-content"
          backgroundColor={'transparent'}
          translucent
        />
        <TabScreen />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    ...applicationStyle.mainCon,
  },
});

//make this component available to the app
export default connect()(MainScreen);
