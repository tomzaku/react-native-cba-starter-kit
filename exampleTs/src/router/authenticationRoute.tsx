import { pick } from 'ramda'
import { createStackNavigator } from 'react-navigation'
import { getNavigationOptionsDefault, getRoutes } from './helper/routerHelper'

import { getStackRoute } from './helper/stackBuilder'
export const setupAuthRoute = () => {
	const listScreen = getRoutes()
	const authenticationRoute = pick(['Login', 'Register'])(listScreen)
	const MainRoute = createStackNavigator(
		{
			...getStackRoute(authenticationRoute),
		},
		{
			initialRouteKey: 'Login',
			navigationOptions: getNavigationOptionsDefault(),
		},
	)
	return MainRoute
}
