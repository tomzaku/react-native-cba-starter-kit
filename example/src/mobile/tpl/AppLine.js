/* @flow */

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { metric, color, applicationStyle, font } from "AppTheme";

export default class Line extends PureComponent {
  getHightLine(type) {
    if (type === 'thin'){
      return metric.LINE_HEIGHT_S
    }
    if (type == 'thick'){
      return metric.LINE_HEIGHT_L
    }
    return metric.LINE_HEIGHT
  }
  render() {
    const { containerStyle, style, type} = this.props
    const heightLine = this.getHightLine(type)
    return (
      <View style={[styles.container, containerStyle, {
        height: heightLine
      }]}>
        <View style={[styles.line, style]} />
      </View>

    );
  }
}
Line.defaultProps = {
  type: 'normal'
}

Line.propTypes = {
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    // height: metric.LINE_HEIGHT,
    backgroundColor: color.LINE_BORDER
  },
  line: {
    flex: 1
  }
});
