import React from 'react'
import { StackNavigatorConfig, createStackNavigator, createBottomTabNavigator } from "react-navigation";
import app from "@app/index";
import * as R from 'ramda'

const setupMainRoute = (stackConfig?: StackNavigatorConfig) => {
    return createStackNavigator(
        {
            MainTab: createBottomTabNavigator(R.pick(['MainCount', 'Sample'], app.route))
        },
        {
            initialRouteKey: 'MainTab',
            ...stackConfig
        }
    )
}
export default setupMainRoute()