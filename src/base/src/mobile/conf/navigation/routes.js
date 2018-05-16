/**
* @providesModule CFRoutes
*/

import React, { Component, PureComponent } from 'react';
import { screenList } from '../helper/module'
// import * as AllPatientScreen from '../../module/patient/view/index'

// DEVICE_TYPE will return 'phone' or 'tablet'
import { DEVICE_TYPE } from 'AppSetting';
import { getSessionHeader, getMainTabNavigator } from './tabBuilder';
import _ from 'lodash'

export const overridePropertyToTablet = (oldRoutes, generalType) => {
  let routes = _.cloneDeep(oldRoutes)
  Object.keys(routes).map(( screenKey, index ) => {
    const generalProperties = routes[screenKey][generalType]
    routes[screenKey][DEVICE_TYPE] = routes[screenKey][DEVICE_TYPE] || {}
    Object.keys(generalProperties).map(( propertyKey, index) => {
      if (!routes[screenKey][DEVICE_TYPE][propertyKey]) {
        routes[screenKey][DEVICE_TYPE][propertyKey] = generalProperties[propertyKey]
      }
    })
  })

  return routes
}

const overridePropertyOneColumn = (routes, generalType) => {
  Object.keys(routes).map(( screenKey, index ) => {
    switch(screenKey) {
      case 'AllPatient': 
      case 'TimeLineEncounter': 
      case 'AllPractitioner': {
        let routeOneColumn = `${screenKey}OneColumn`
        routes[routeOneColumn] = {
          phone: routes[screenKey][generalType]
        }
      }
    }
  })
  return routes
}

// Include session or tab navigation
export const getRouteAdvanced = () =>( {
  // NestedComponent: {
  //   phone: {
  //     title: 'General',
  //     icon: 'location-city',
  //     tabBarLabel: 'General',
  //     screen: getMainTabNavigator(['Test', 'Todo']),
  //     headerMode: "none",
  //   }
  // }
})

const router = (options = {}) => {
  const { isNested = false } = options
  let Route = screenList;
  if (isNested) {
    Route ={
      ...Route,
      ...getRouteAdvanced(),
    }
  }
  screenListOneColumn = overridePropertyOneColumn(Route, 'phone')
  if (DEVICE_TYPE != 'phone') {
    return overridePropertyToTablet(screenListOneColumn, 'phone')
  }
  return screenListOneColumn
}

export default router;
