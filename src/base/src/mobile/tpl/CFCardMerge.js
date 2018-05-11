/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color, metric, font, applicationStyle } from 'AppTheme';

export default class CFCardMerge extends Component {
  constructor(props) {
    super(props);
    this._renderIconStatus = this._renderIconStatus.bind(this);
  }

  _renderIconStatus() {
    const { status } = this.props;
    if (status === 'done') {
      return (<Icon name={'done'} style={styles.rightBottom} size={20} color={ThemeColor.success} />);
    }
    return (<Icon name={'timelapse'} style={styles.rightBottom} size={20} color={'red'} />);
  }

  render() {
    const {
      title,
      before,
      after,
      data,
      style,
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={styles.topComponent}>
          <Text style={styles.titleText}>{title}:</Text>
          <Text style={styles.dataText}>{data}</Text>
        </View>
        <View style={styles.bottomComponent}>
          <View style={styles.leftBottom}>
            <Text style={styles.statusText}>{before}</Text>
            <Icon name={'arrow-forward'} style={styles.iconTransform} size={20} color={ThemeColor.primary} />
            <Text style={styles.statusText}>{after}</Text>
          </View>
          {this._renderIconStatus()}
        </View>
      </View>
    );
  }
}

CFCardMerge.propTypes = {
  title: PropTypes.string,
  before: PropTypes.string,
  after: PropTypes.string,
  data: PropTypes.string,
  style: PropTypes.any,
  status: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  topComponent: {
    backgroundColor: color.NAV_HEADER,
    flexDirection: 'row',
    padding: metric.MARGIN_XXS,
    paddingLeft: metric.MARGIN,
  },
  bottomComponent: {
    flexDirection: 'row',
    padding: metric.MARGIN,
    paddingLeft: metric.MARGIN,
    alignItems: 'center',
  },
  leftBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightBottom: {},
  statusText: {
    ...applicationStyle.title,
  },
  titleText: {
    ...applicationStyle.title,
    flex: 1,
  },
  dataText: {
    ...applicationStyle.title,
    flex: 3,
  },
  iconTransform: {},
});
