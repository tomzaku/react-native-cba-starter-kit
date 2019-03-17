import * as R from 'ramda'
import { createStackNavigator, NavigationRouteConfigMap, StackNavigatorConfig } from "react-navigation";
import app from '@app/index';

const build = (routeKey: string | string[], stackConfig?: StackNavigatorConfig) => {
    const listRouteKey = typeof routeKey === 'string' && [routeKey] || routeKey as string[]
    const listRoute = R.pick(listRouteKey, app.route) as {[key: string]: NavigationRouteConfigMap}
    return createStackNavigator(listRoute,
        {
         ...stackConfig,
        }
    )
}

export default {
    build
}