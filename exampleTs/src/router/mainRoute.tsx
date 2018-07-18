import { tabBuilder } from '@router/helper/tabBuilder'
import { createStackNavigator, StackNavigatorConfig } from 'react-navigation'
import { getNavigationOptionsDefault, getRoutes } from './helper/routerHelper'
import { getStackRoute } from './helper/stackBuilder'
export const setupMainRoute = (stackConfig?: StackNavigatorConfig) => {
	const listScreen = getRoutes()
	const MainRoute = createStackNavigator(
		{
			MainTab: tabBuilder([['Todo', 'TodoSingle'], ['Setting', 'SelectTheme']]),
			// ...listScreen,
			...getStackRoute(listScreen),
		},
		{
			// initialRouteKey: 'Sett',
			navigationOptions: getNavigationOptionsDefault(),
			...stackConfig,
		},
	)
	return MainRoute
}
