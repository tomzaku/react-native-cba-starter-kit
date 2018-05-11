/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeColor, ThemeSpacing } from 'AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CFMessage extends Component {
  constructor(props) {
    super(props);
    this._renderIconProcess = this._renderIconProcess.bind(this);
  }

  _renderIconProcess() {
    const { position, status } = this.props;
    if (position === 'right') {
      if (status === 'processing') {
        return (<Icon name={'access-time'} size={20} />);
      }
      return (<Icon name={'done'} size={20} />);
    }
    return null;
  }

  render() {
    const { message, position, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.left}>
          <View style={position === 'left'
            ? styles.headerLeft
            : styles.header}
          />
          <View style={position === 'left'
            ? styles.bodyLeft
            : styles.body}
          >
            <Text style={position === 'left'
              ? styles.messageLeft
              : styles.message}
            >{message}</Text>
          </View>

          <View style={position === 'left'
            ? styles.footerLeft
            : styles.footer}
          />
        </View>
        {this._renderIconProcess()}
      </View>
    );
  }
}

CFMessage.propTypes = {
  message: PropTypes.string,
  position: PropTypes.string,
  style: PropTypes.any,
  status: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  left: {
    flex: 1,
  },
  headerLeft: {
    backgroundColor: ThemeColor.brightLowest,
    height: metric.MARGIN_XS,
    marginLeft: metric.MARGIN_S,
  },
  header: {
    backgroundColor: ThemeColor.secondary,
    height: metric.MARGIN_XS,
    marginRight: metric.MARGIN_S,
  },
  footer: {
    borderRightWidth: metric.MARGIN_S,
    borderBottomWidth: metric.MARGIN_XS,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: ThemeColor.secondary,
    borderLeftColor: 'transparent',
  },
  footerLeft: {
    borderLeftWidth: metric.MARGIN_S,
    borderBottomWidth: metric.MARGIN_XS,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: ThemeColor.brightLowest,
    borderLeftColor: 'transparent',
  },
  body: {
    backgroundColor: ThemeColor.secondary,
    paddingLeft: metric.MARGIN_XS,
    paddingRight: metric.MARGIN_XS,
    marginRight: metric.MARGIN_S,
  },
  bodyLeft: {
    backgroundColor: ThemeColor.brightLowest,
    paddingLeft: metric.MARGIN_XS,
    paddingRight: metric.MARGIN_XS,
    marginLeft: metric.MARGIN_S,
  },
  messageLeft: {
    color: 'black',
  },
  message: {
    color: 'white',
  },
  right: {
    width: metric.MARGIN,
    backgroundColor: '#7549ad',
  },
  borderMessage: {
    borderRadius: 90,
    flex: 1,
    backgroundColor: 'white',
  },
});
