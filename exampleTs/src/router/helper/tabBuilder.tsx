import { AppBottomTabBar } from '@tpl/AppBottomTabBar/AppBottomTabBar'
import {
	addIndex,
	compose,
	map,
	mapObjIndexed,
	mergeAll,
	path,
	pick,
	} from 'ramda'
import { createBottomTabNavigator, createStackNavigator, NavigationNavigatorProps } from 'react-navigation'
import { getHeaderTitle, getNavigationOptionsDefault, getRoutes, getTabNavigationOptionsDefault } from './routerHelper'
const mapIndexed = addIndex(map)

const addStackNavigation = (keyRoute: string | string[], index: number) => {
	const listRoute = getRoutes()
	const keyRouteArray = typeof keyRoute === 'string' ? [keyRoute] : keyRoute
	const stackRoute = compose(pick(keyRouteArray))(listRoute)
	return {
		[`StackTabApp${index}`]: createStackNavigator(
			{
				...stackRoute,
			},
			{
				navigationOptions: getNavigationOptionsDefault((navigationConfig: NavigationNavigatorProps) => {
						const routeName: string = path(['navigation', 'state', 'routeName'])(navigationConfig) || ''
						return {
							headerTitle: getHeaderTitle(listRoute[routeName]),
						}
					},
				),
			},
		),
	}
}
export const tabBuilder = (listTabRoute: (string | string[])[]) => {
	const tabRoute = compose(mergeAll, mapIndexed(compose(addStackNavigation)))(listTabRoute)
	const ScreenTab = createBottomTabNavigator(
		{
			...tabRoute,
		},
		{
			tabBarComponent: AppBottomTabBar,
			navigationOptions: getTabNavigationOptionsDefault(),
		},
	)
	ScreenTab.navigationOptions = {
		header: null,
	}
	return ScreenTab
}
