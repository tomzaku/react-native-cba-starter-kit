//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { AppSwitch, AppLine, AppButton } from 'AppComponent';
import { metric, applicationStyle } from 'AppTheme'
import { app, authentication as authAction } from 'AppAction'

// create a component
class Menu extends Component {
  onPressChangeLanguage = () => {
    const { isVi, onPressChangeLanguage } = this.props;
    if (isVi) {
      return onPressChangeLanguage('en')
    }
    return onPressChangeLanguage('vi')
  }
  onPressSwitchTheme = () => {
    const { isDark } = this.props;
    if (isDark) {
      // StatusBar.setBarStyle('dark-content', true);
      
    } else {
      // StatusBar.setBarStyle('light-content', true);
      
    }
    this.props.onPressSwitchTheme()
  }
  render() {
    const { onPressSwitchTheme, isDark, isVi } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <AppSwitch labelKeyLang={'changeTheme'} descKeyLang={'changeTheme_desc'} onPress={this.onPressSwitchTheme} value={isDark} />
          <AppLine containerStyle={styles.line} type={'thin'} />
          <AppSwitch label={'Language Vi'} desc={'Change language to vi/en'} onPress={this.onPressChangeLanguage} value={isVi} />
        </View>
        <View>
          <AppLine containerStyle={styles.line} type={'thin'} />
          <AppButton title={'LOG OUT'} onPress={this.props.logout} warning />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    ...applicationStyle.con,
  },
  line: {
    marginVertical: metric.MARGIN_XS,
  },
  body: {
    flex: 1,
  }
});

const mapStateToProps = (state, props) => ({
  isDark: state.app.theme === 'light' ? false : true,
  isVi: state.app.language === 'vi' ? true : false,
})

const mapDispatchToProps = (dispatch, props) => ({
  onPressSwitchTheme: () => dispatch(app.switchTheme()),
  onPressChangeLanguage: (code) => dispatch(app.changeLanguage(code)),
  logout: () => dispatch(authAction.logout())
})

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
