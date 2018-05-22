//import liraries
import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  metric,
  color,
  applicationStyle,
  font,
  image as imageResource
} from "AppTheme";

import HeaderIconNav from './CFHeaderIconNav';
import R from 'ramda';
import { withNavigation } from 'react-navigation';


// create a component
class AppToolBar extends PureComponent {
  goBack = () => {
    const { navigation } = this.props;
    navigation && navigation.goBack()
  }
  render() {
    
    // iconClose: auto render close icon on left top
    // iconBack: auto render Back icon on left top
    // absolute: absolute screen
    // leftComponent: icons on the left

    const { title, style, iconClose, iconBack, titleStyle, navigation, leftComponent, rightComponent, absolute, backgroundColor, iconColor, showStatusBar } = this.props;
    const leftComponentOverride = (iconBack && [{ name: "ios-arrow-back", onPress: this.goBack, color: iconColor}]) || (iconClose && [{ name: "ios-close", onPress: this.goBack, color: iconColor}]) || leftComponent;

    return (
      <View style={[styles.header, absolute && styles.absolute, backgroundColor && { backgroundColor }, showStatusBar && styles.showStatusBar, style,  ]}>
        <View style={{ flex: 1 }}>
          <HeaderIconNav items={leftComponentOverride} position="left" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleHeader, titleStyle ]}>{title}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <HeaderIconNav items={rightComponent} />
        </View>
        {/* <View style={{ flex: 1, backgroundColor: "red" }} /> */}
      </View>
    );
  }
}

AppToolBar.defaultProps = {
  iconBack: false,
  rightComponent: [],
  leftComponent: [],
  absolute: false,
  iconColor: 'white',
};

// define your styles
const styles = StyleSheet.create({
  titleHeader: {
    marginLeft: metric.MARGIN,
    ...applicationStyle.titleHl
  },
  titleContainer: {
    // ...applicationStyle.center
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 1000
  },
  header: {
    flexDirection: "row",
    paddingTop: metric.STATUS_BAR_HEIGHT,
    ...applicationStyle.navHeader,
    ...applicationStyle.center,
    height: metric.TABBAR_HEIGHT + metric.STATUS_BAR_HEIGHT,
    ...Platform.select({
      ios: {},
      android: {
        height: metric.TABBAR_HEIGHT,
        paddingTop: 0
      }
    })
  },
  showStatusBar: {
    paddingTop: metric.STATUS_BAR_HEIGHT,
    height: metric.TABBAR_HEIGHT + metric.STATUS_BAR_HEIGHT,
  }
});

//make this component available to the app
export default withNavigation(AppToolBar);
