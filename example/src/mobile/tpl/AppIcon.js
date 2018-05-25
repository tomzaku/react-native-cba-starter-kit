import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { metric, color, applicationStyle, font } from "AppTheme";

import styles from './style/AppIconStyle.js'

export default class AppIcon extends PureComponent {
  render() {
    const { containerStyle, onPress, color, size } = this.props;
    if (!onPress) {
      return (
        <Icon size={size} color={color} {...this.props}/>
      )
    }
    return (
      <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
        <Icon size={size} color={color} {...this.props}/>
      </TouchableOpacity>
    )
  }
}
AppIcon.defaultProps = {
  color: color.ICON,
  size: metric.ICON,
}