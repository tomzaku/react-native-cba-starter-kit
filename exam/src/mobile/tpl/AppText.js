//import liraries
import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import I18n from '../i18n/index'
// import I18n from 'react-native-i18n'

// create a component
class AppText extends PureComponent {
  render() {
    const { style, keyLang, language, uppercase, children } = this.props;
    let text;
    if (uppercase) {
      text = React.Children.map(children, child => {
        if (_.isString(child)) {
          return _.toUpper(child);
        } else {
          return child;
        }
      })
    } else {
      text = children;
    }

    // I18n.defaultLocale = 'vi'
    // I18n.locale = 'vi'
    if (keyLang) {
      return (
        <Text {...this.props} style={style}> {I18n.t(keyLang, { locale: language })} </Text>
      )
    }
    return (
      <Text {...this.props} style={style} >{text}</Text>
    );
    
  }
}

// define your styles
const styles = StyleSheet.create({
});

const mapStateToProps = (state, props) => ({
  language: state.app.language
})
//make this component available to the app
const AppRedux = connect(mapStateToProps)(AppText)
export default AppRedux;
