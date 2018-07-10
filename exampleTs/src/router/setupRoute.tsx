import { TTheme } from '@module/setting/logic.redux/initalState'
import { tabBuilder } from '@router/helper/tabBuilder'
import { createStackNavigator } from 'react-navigation'
import { getNavigationOptionsDefault, getRoutes } from './helper/routerHelper'
export const setupRoute = (themeType?: TTheme) => {
	const listScreen = getRoutes()
	const MainRoute = createStackNavigator(
		{
			MainTab: tabBuilder(['Todo', 'Setting'], themeType),
			...listScreen,
		},
		{
			initialRouteKey: 'MainTab',
			navigationOptions: getNavigationOptionsDefault(themeType),
		},
	)
	return MainRoute
}
