import { tabBuilder } from '@router/helper/tabBuilder'
import { createStackNavigator } from 'react-navigation'
import { getNavigationOptionsDefault, getRoutes } from './helper/routerHelper'
import { getStackRoute } from './helper/stackBuilder'
export const setupMainRoute = () => {
	const listScreen = getRoutes()
	const MainRoute = createStackNavigator(
		{
			MainTab: tabBuilder([['Todo', 'TodoSingle'], ['Setting', 'SelectTheme']]),
			// ...listScreen,
			...getStackRoute(listScreen),
		},
		{
			initialRouteKey: 'MainTab',
			navigationOptions: getNavigationOptionsDefault(),
		},
	)
	return MainRoute
}
