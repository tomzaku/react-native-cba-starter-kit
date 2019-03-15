import React from 'react'
import { StackNavigatorConfig, createStackNavigator, createBottomTabNavigator } from "react-navigation";
import app from "@app/index";
import * as R from 'ramda'
import * as tabUtil from './util/tab'

const setupMainRoute = (stackConfig?: StackNavigatorConfig) => {
    
    return createStackNavigator(
        {
            MainTab: tabUtil.build(['MainCount', 'Sample']),
            // MainTab: createBottomTabNavigator(R.pick(['MainCount', 'Sample'], app.route))
            // MainTab: createBottomTabNavigator(R.pick(['MainCount', 'Sample'], app.route))
        },
        {
            initialRouteKey: 'MainTab',
            // header: null,
            navigationOptions: () => ({header: null}),
            ...stackConfig
        }
    )
}
export default setupMainRoute()