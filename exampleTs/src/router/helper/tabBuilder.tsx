import { TTheme } from '@module/setting/logic.redux/initalState'
import { getRoutes, getTabNavigationOptionsDefault, getTabRouteConfigDefault } from '@router/helper/routerHelper'
import { getNavigationOptionsDefault } from '@router/helper/routerHelper'
import { AppText } from '@tpl/AppText'
import {
	addIndex,
	compose,
	map,
	mapObjIndexed,
	mergeAll,
	pick,
	} from 'ramda'
import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { getHeaderTitle } from './routerHelper'
const mapIndexed = addIndex(map)

const addStackNavigation = (themeType:TTheme) => (keyRoute: string | string[], index: number) => {
	const listRoute = getRoutes()
	const keyRouteArray = typeof keyRoute === 'string' ? [keyRoute] : keyRoute
	const stackRoute = compose(pick(keyRouteArray))(listRoute)
	return {
		[`StackTabApp${index}`]: createStackNavigator(
			{
				...stackRoute,
			},
			{
				navigationOptions: getNavigationOptionsDefault(
					themeType,
					(navigationConfig) => {
						const { routeName } = navigationConfig.navigation.state
						return {
							headerTitle: getHeaderTitle(listRoute[routeName]),
						}
					},
				),
			},
		),
	}
}
export const tabBuilder = (listTabRoute: (string | string[])[], themeType?: TTheme) => {
	const tabRoute = compose(mergeAll, mapIndexed(compose(addStackNavigation(themeType))))(listTabRoute)
	const ScreenTab = createBottomTabNavigator(
		{
			...tabRoute,
		},
		{
			tabBarOptions: {
				...getTabRouteConfigDefault(themeType),
			},
			navigationOptions: getTabNavigationOptionsDefault(themeType),
		},
	)
	ScreenTab.navigationOptions = {
		header: null,
	}
	return ScreenTab
}
