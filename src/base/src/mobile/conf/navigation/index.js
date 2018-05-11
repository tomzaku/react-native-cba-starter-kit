
import React, { Component } from 'react';
import getRoutes from './routes';
import { DEVICE_TYPE } from 'AppSetting';
import { color, metric, font, applicationStyle } from 'AppTheme';
import R from 'ramda'
import { getMainTabNavigator } from './tabBuilder';
import { StackModalNavigator, getStackRoute } from "./stackBuilder";

const getStackNavigator = (initialRouteName) => {
  const statckNavigator = StackModalNavigator({
    Main: {
      // screen: getMainTabNavigator(['ListEncounter', 'AllPatient', 'Menu'],
      // screen: getMainTabNavigator(['ListEncounter', 'ListEncounter', 'AllPatient', 'AllOrganization','AllPractitioner', 'Menu'],
      // screen: getMainTabNavigator(['AllPatient', 'Menu'],
      // screen: getMainTabNavigator(['AllPatient'],
      // screen: getMainTabNavigator(['AllPatient'],
      screen: getMainTabNavigator(['ListEncounter', 'AllPatient', 'PractitionOrganization', 'Menu'],
      {
        isNested: true
      }
    ),
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
        ...applicationStyle.titleHl,
        alignSelf: 'center',
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
