
import React, { Component, PureComponent } from 'react';
import {
  TabNavigator,
} from 'react-navigation';
import R from 'ramda'
import { DEVICE_TYPE } from 'AppSetting';
// import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation-performance';
import { color, metric, font, applicationStyle } from 'AppTheme';
import Icon from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/MaterialIcons';

import SegmentNavigation from './SegmentNavigation'
import getRoutes from './routes';


const getBottomTabConfig = (value, key, obj) => {
  const {
    barBackgroundColor = color.NAV_BOTTOM_TABBAR,
  } = value[DEVICE_TYPE]
  return { barBackgroundColor }
}

const addReactNavigationProperties = (value, key, obj) => {
  let tabRoute = {}
  let configMaterialBottomNavigationBar = {};
  const {
    title,
    screen,
    tabBarLabel,
    icon,
    headerMode,
    headerBackgroundColor = color.NAV_HEADER,
  } = value[DEVICE_TYPE] 
  tabRoute = {
    screen,
    navigationOptions:  
      ! headerMode === 'none' ? { header: null } 
      : navigation => ({
      title,
      tabBarLabel,
      headerStyle: {
        ...applicationStyle.navHeader,
        backgroundColor: headerBackgroundColor,
      },
      headerTitleStyle: {
        ...applicationStyle.titleHl,
        alignSelf: 'center',
      },
      // Config tab bar bottom
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={icon}
          size={24}
          // style={{backgroundColor: 'red'}}
          color={focused ? color.BOTTOM_TABBAR_ICON_SELECTED : color.BOTTOM_TABBAR_ICON}
          style={[ tintColor, applicationStyle.center,{ alignSelf: 'center' } ]}
        />
      ),
      ...navigation.navigationOptions,
    }),
  };
  return tabRoute
}

const addReactNavigationPropertiesRambda = R.compose(R.mapObjIndexed(addReactNavigationProperties), R.pick)
const getBottomTabConfigRambda = R.compose(R.mapObjIndexed(getBottomTabConfig), R.pick)

export const getSessionHeader = (tabRoute = []) => {
  const tabNavigator = TabNavigator(addReactNavigationPropertiesRambda(tabRoute,getRoutes()), {
    tabBarPosition: 'top',
    animationEnabled: false,
    tabBarComponent: SegmentNavigation,
    swipeEnabled: false,
    navigation: (navigation) => ({
      headerBackgroundColor: color.NAV_HEADER,
    })
  });
  return tabNavigator;
}


export const getMainTabNavigator = (listRoute, options = {}) => {
  const { isNested = false } = options
  const tabNavigator = TabNavigator(
  {
    ...addReactNavigationPropertiesRambda(listRoute, getRoutes({
      isNested,
    })),
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    lazy: true,
    animationEnabled: false,
    tabBarComponent: NavigationComponent,
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: color.BOTTOM_TABBAR_ICON,
        activeLabelColor: color.BOTTOM_TABBAR_ICON_SELECTED,
        delay: 400,
        tabStyle: { 
          borderTopWidth: 0.5,
          borderTopColor: '#B6B6B6'
        },
        // rippleColor: color.BOTTOM_TABBAR_RIPPLE,
        shifting: false,
        tabs: {
          ...getBottomTabConfigRambda(listRoute, getRoutes({
            isNested,
          })),
        }
      }
    }
  });
  return tabNavigator;
}
