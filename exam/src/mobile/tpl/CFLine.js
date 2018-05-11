/* @flow */

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { metric, color, applicationStyle, font } from "AppTheme";

export default class Line extends PureComponent {
  render() {
    const { containerStyle, style } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.line, style]} />
      </View>

    );
  }
}

Line.propTypes = {
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    // height: metric.LINE_HEIGHT,
    // backgroundColor: color.LINE_BORDER,
    // flex: 1,
    // overflow: 'hidden',
    height: metric.LINE_HEIGHT,
    backgroundColor: color.LINE_BORDER
  },
  line: {
    flex: 1
  }
});
