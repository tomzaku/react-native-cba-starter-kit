//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import styles from './style/CFSwitchStyle';
import { color } from 'AppTheme'
// create a component
class CFSwitch extends Component {
  render() {
    const { onPress, label, desc ='', value } = this.props;
    return (
      <View style={styles.switchComponent}>
        <View>
          <Text style={styles.label}>
            {label}
          </Text>
          <Text>
            {desc}
          </Text>
        </View>
        <Switch
          onValueChange={onPress}
          value={value}
          onTintColor={color.SWITCH}
          thumbTintColor={color.BACKGROUND}
        />
      </View>
    );
  }
}
CFSwitch.defaultProps = {
  label: '',
  desc: '',
}
//make this component available to the app
export default CFSwitch;
