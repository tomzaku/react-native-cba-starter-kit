/* @flow */

import React, { Component } from 'react';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { metric, color, applicationStyle, font } from 'AppTheme';
import { StyleSheet } from 'react-native';

export default class AppFab extends Component {
  render() {
    const { data } = this.props;
    return (
      <ActionButton
        {...this.props}
        radiua={200}
        style={{ backgroundColor: 'blue' }}
        radius={150}
        position={'right'}
        // hideShadow
        {...this.props}
      >
        {data && data.map(({ buttonColor, onPress, title, icon }) => (
          <ActionButton.Item
            buttonColor={buttonColor}
            title={title}
            size={45}
            onPress={onPress}
            key={title}
          >
            <Icon name={icon} style={styles.actionButtonIcon} />
          </ActionButton.Item>
        ))}
      </ActionButton>
    );
  }
}

AppFab.propTypes = {
  data: PropTypes.array,
};
AppFab.defaultProps = {
  buttonColor: color.FAB,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    // right: metric.MARGIN_L,
    // bottom: metric.MARGIN_L,
    // width: 80,
    // height: 80,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
