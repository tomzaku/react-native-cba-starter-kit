
import React, { Component } from 'react';
import getRoutes from './routes';
import { DEVICE_TYPE } from 'AppSetting';
import { color, metric, font, applicationStyle } from 'AppTheme';
import R from 'ramda'
import { getMainTabNavigator } from './tabBuilder';
import { StackModalNavigator, getStackRoute } from "./stackBuilder";
import { StackNavigator } from "react-navigation";

const getStackNavigator = (initialRouteName) => {
  const statckNavigator = StackNavigator({
    Main: {
      screen: getMainTabNavigator(['Todo', 'Menu']),
    },
    ...getStackRoute(),
  }, {
    initialRouteName,
    headerMode: 'float',
    navigationOptions: navigation => ({
      headerStyle: {
        ...applicationStyle.navHeader,

      },
      headerTitleStyle: {
        ...applicationStyle.titleHeader,
        
      },
      headerTintColor: color.TITLE_HIGHLIGH,
      ...navigation.navigationOptions,
    }),
    transitionConfig: () => ({
      transitionSpec: {
        duration: 200,
      },
    }),
  });
  return statckNavigator;
}

export default getStackNavigator;
