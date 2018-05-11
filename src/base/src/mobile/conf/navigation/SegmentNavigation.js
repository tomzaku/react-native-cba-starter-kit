//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import SegmentControl from './Segment';
import { color, metric, font, applicationStyle } from 'AppTheme';
import { DEVICE_TYPE } from 'AppSetting';


// create a component
class SegmentNavigation extends Component {
  render() {
      const {
        activeTintColor,
        inactiveTintColor,
        navigationState,
        bottomNavigationOptions,
        getLabel: navigationGetLabel,
        getLabelText: navigationGetLabelOld,
        getOnPress: navigationGetOnPress,
        renderIcon,
        jumpToIndex,
        style
      } = this.props
      const previousScene = navigationState.routes[navigationState.index]
      let labels = []
      let onPress = []
      let scenes = []
      navigationState.routes.map((route, index) => {
        const focused = index === navigationState.index
        const getLabel = navigationGetLabel || navigationGetLabelOld
        // scene object for `getLabel` and `renderIcon`
        const scene = {
          route,
          index,
          focused,
          tintColor: focused ? activeTintColor : inactiveTintColor
        }
        const label = getLabel(scene)
        // onPress.push(navigationGetOnPress(previousScene, scene))
        // console.log('<<',navigationGetOnPress(previousScene, scene), navigationGetOnPress)
        scenes.push(scene)

        labels.push(label)
    })
    // console.log('>>>', onPress, previousScene, scenes, navigationState)
    return (
      <View style={styles.container}>
        <SegmentControl
          values={labels}
          // badges={[0, 5, 0, 2]}
          selectedIndex={navigationState.index}
          height={30}
          onTabPress={(i) => jumpToIndex(i)}
          // onTabPress={(i) => onPress[i] ? onPress[i](scene[i], jumpToIndex) : null}
          borderRadius={5}
          tabStyle={{
            backgroundColor: color.SEGMENT,
          }}
          tabTextStyle= {{
            color: color.SEGMENT_TEXT,
          }}
          activeTabTextStyle= {{
            color: color.SEGMENT_TEXT_SELECTED,
          }}
          activeTabStyle={{
            backgroundColor: color.SEGMENT_SELECTED,
          }}
        />
      </View>
    );
  }
}
const styleForTablet = () => {
  if (DEVICE_TYPE !== 'phone') {
    return {
      paddingTop: 30,
      paddingBottom: 10,
      paddingHorizontal: '25%',
      borderBottomWidth: 0.4,
      borderBottomColor: 'white',
    }
  }
  return {}
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.NAV_HEADER,
    paddingHorizontal: 30,
    paddingBottom: 10,
    ...styleForTablet(),
  },
});

//make this component available to the app
export default SegmentNavigation;
