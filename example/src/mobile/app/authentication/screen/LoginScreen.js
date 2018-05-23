//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { authentication as authAction } from 'AppAction';
import { AppTextInput, AppButton, AppText, AppLogo } from 'AppComponent'
import { applicationStyle, metric } from 'AppTheme'

import { Fumi, Kohana, Makiko } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
class LoginScreen extends Component {
  fumiTextInput (label, icon) {
    return (
      <Fumi
        label={label}
        iconClass={Ionicons}
        iconName={icon}
        iconColor={'#f95a25'}
        iconSize={20}
        style={{ height: 68, marginBottom: metric.MARGIN_XXS }}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <AppLogo styleContainer={styles.logo} />
        <View style={styles.body}>
          {this.fumiTextInput('Username', 'ios-person-outline')}
          {this.fumiTextInput('Password', 'ios-key-outline')}
          <AppButton onPress={this.props.login} title={'Login'} large/>
        </View>
        {/* <AppText>Username: </AppText>
        <AppTextInput/> */}
        {/* <AppText>Password: </AppText>
        <AppTextInput/> */}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    ...applicationStyle.mainCon,
    // alignItems: 'center',
    backgroundColor: '#13b3ff',
  },
  logo: {
    marginTop: metric.MARGIN_XL,
    marginBottom: metric.MARGIN,
    alignItems: 'center',
  },
  body: {
    // flex: 1,
    margin: metric.MARGIN
  }
});

const mapDispatch = (dispatch, ownProps) =>({
  login: () => dispatch(authAction.login())
})

//make this component available to the app
export default connect(null, mapDispatch)(LoginScreen);
