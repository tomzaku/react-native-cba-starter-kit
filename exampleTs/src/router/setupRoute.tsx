import { createSwitchNavigator } from 'react-navigation'
import { setupAuthRoute } from './authenticationRoute'
import { getRoutes } from './helper/routerHelper'
import { setupMainRoute } from './mainRoute'

export const setupRoute = () => {
	const listRoute = getRoutes()
	return createSwitchNavigator(
		{
			Auth: setupAuthRoute(),
			Loading: listRoute['LoadingAuthentication'],
			Main: setupMainRoute({
				// initialRouteName: 'Calendar',
			}),
		},
		{
			initialRouteName: 'Loading',
		},
	)
}
