/* @flow */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ActionButton from 'react-native-circular-action-menu';
import ActionButton from 'react-native-action-button';
import { metric, color, applicationStyle, font } from 'AppTheme';

// import * as Animatable from 'react-native-animatable';

export default class CFFab extends Component {
  // componentWillReceiveProps(nextProps) {
  //   return false;
  // }
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return false;
  // }
  
  render() {
    const { navigation, data=[], onPress} = this.props;
    return (
      <ActionButton
        // buttonColor={color}
        //radius={150}
        {...this.props}
        size={63}
        offsetX={metric.MARGIN}
        offsetY={metric.MARGIN}
        position={'right'}
        // hideShadow={true}
        {...this.props}
      >
        {data.map(({ buttonColor, onPress, title, icon }) => (
          <ActionButton.Item
            buttonColor={buttonColor}
            title={title}
            size={45}
            onPress={onPress}
            key={title}
            // hideShadow={false}
          >
            <Icon name={icon} style={styles.actionButtonIcon} />
          </ActionButton.Item>
        ))}
      </ActionButton>
    );
  }
}

CFFab.propTypes = {
  navigation: PropTypes.any,
  data: PropTypes.array,
};
CFFab.defaultProps = {
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
