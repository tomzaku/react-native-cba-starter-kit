import React from 'react'
import * as R from 'ramda'
import app from '@app/index'
import { createStackNavigator } from 'react-navigation';

export const setupAuthRoute = () => {
    return createStackNavigator(
        R.pick(['AuthLogin'], app.route),
        {
            initialRouteKey: 'AuthLogin'
        })
}

export default setupAuthRoute()