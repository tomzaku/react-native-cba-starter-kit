/* @flow */

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { color, metric } from 'AppTheme';

export default class AppStatusBar extends PureComponent {
  render() {
    const {style} = this.props
    return (
      <View>
        <View style={[styles.statusBar,style]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: metric.STATUS_BAR_HEIGHT,
    backgroundColor: color.STATUSBAR,
  },
});
