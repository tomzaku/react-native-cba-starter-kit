import React, { Component, PureComponent } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { time } from 'AppUtil';
import { metric, color, applicationStyle, font, image as imageResource } from "AppTheme";

class HeaderIconNav extends PureComponent {
  onPress = (onPress) => {
    time.pressItemGeneral(onPress)
  }
  
  render() {
    const { items, styleIcon, position } = this.props;
    const componentStyle = position === "left" ?  styles.leftContainer : styles.rightContainer;
    const iconPositionStyle = position === "left" ? styles.left : styles.right;
    return (
      <View style={styles.headerRight}>
        {items.map((iconItem) => {
          const { onPress, size = metric.ICON, style, color = 'white', name } = iconItem
          return (
          <TouchableOpacity onPress={() => this.onPress(onPress)} key={`iconNav-${name}`} style={[styles.container, { height: size }, componentStyle]}>
            <Ionicons {...iconItem} style={[styles.iconComponent, styleIcon, style, iconPositionStyle ]} size={size} color={color} />
          </TouchableOpacity>
          )
        } )}
      </View>
    );
  }
}
HeaderIconNav.defaultProps = {
  position: 'right'
}
const styles = StyleSheet.create({
  container: {
    width: 32,
    justifyContent: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  headerRight: {
    flexDirection: 'row',
  },
  right: {
    // paddingLeft: metric.MARGIN_L,
    paddingRight: metric.MARGIN_S,
  },
  left: {
    // paddingLeft: metric.MARGIN_L,
    paddingLeft: metric.MARGIN_S,
  },
});

export default HeaderIconNav;
