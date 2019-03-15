import * as R from 'ramda'
import { createStackNavigator, NavigationRouteConfigMap } from "react-navigation";
import app from '@app/index';

const build = (routeKey: string | string[]) => {
    const listRouteKey = typeof routeKey === 'string' && [routeKey] || routeKey as string[]
    const listRoute = R.pick(listRouteKey, app.route) as NavigationRouteConfigMap[]
    const listStackRoute = listRoute.map(item => ({
        ...item,
    }))
    const route = R.zipObj(listRouteKey, listStackRoute)
    return createStackNavigator(route)
}

export default {
    build
}