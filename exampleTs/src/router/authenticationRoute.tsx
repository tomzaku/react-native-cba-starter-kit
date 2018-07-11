import { TTheme } from '@module/setting/logic.redux/initalState'
import { tabBuilder } from '@router/helper/tabBuilder'
import { pick } from 'ramda'
import { createStackNavigator } from 'react-navigation'
import { getNavigationOptionsDefault, getRoutes } from './helper/routerHelper'

import { getStackRoute } from './helper/stackBuilder'
export const setupAuthRoute = (themeType?: TTheme) => {
	const listScreen = getRoutes()
	const authenticationRoute = pick(['Login', 'Register'])(listScreen)
	const MainRoute = createStackNavigator(
		{
			...getStackRoute(authenticationRoute),
		},
		{
			initialRouteKey: 'Login',
			navigationOptions: getNavigationOptionsDefault(themeType),
		},
	)
	return MainRoute
}
