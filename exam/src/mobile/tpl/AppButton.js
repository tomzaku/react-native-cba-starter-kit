/* @flow */
import React, { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import rdColor from 'randomcolor';

import styles from './style/AppButtonStyle'

export default class AppButton extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    const { onPress, title } = this.props;
    if (onPress) {
      onPress(title);
    }
  }
  render() {
    const text = this.props.title || this.props.children;
    const { info, rounded, outline, medium, disabled, randomColor, style, third, textStyle, backgroundColor, leftComponent, primary, warning, danger, dark, light, leftStyle, rightComponent, rightStyle, success, large } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.button,
          large && styles.large ,
          medium && styles.medium,
          rounded && styles.rounded,
          info && styles.info,
          primary && styles.primary,
          success && styles.success,
          warning && styles.warning,
          danger && styles.danger,
          dark && styles.dark,
          third && styles.third,
          light && styles.light,
          outline && styles.outline,
          randomColor && {
            backgroundColor: rdColor(
            { luminosity: "dark" }
            )}, backgroundColor && { backgroundColor },
          style
            ]}
              onPress={this.onPress} underlayColor={this.props.underlayColor ? this.props.underlayColor : "rgba(154, 154, 154, 0.8)"}>
        {leftComponent && <View
            style={[
              styles.leftRightComponent,
              styles.leftComponent,
              leftStyle
            ]}
          >
            {leftComponent()}
          </View>}
        {text && <Text
            style={[
              styles.text,
              large ? styles.largeText : {},
              medium ? styles.mediumText : {},
              success ? styles.successText : {},
              info ? styles.infoText : {},
              outline ? styles.outLineText : {},
              textStyle
            ]}
          >
            {text}
          </Text>}
        {rightComponent && <View
            style={[
              styles.leftRightComponent,
              styles.rightComponent,
              rightStyle
            ]}
          >
            {rightComponent()}
          </View>}
      </TouchableOpacity>
      );
  }
}
AppButton.defaultProps = {
  leftStyle: {},
  rightStyle: {},
  leftComponent: null,
  rightComponent: null,
}
AppButton.propTypes = {
  style: PropTypes.any,
  textStyle: PropTypes.any,
  onPress: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  underlayColor: PropTypes.string,
};
