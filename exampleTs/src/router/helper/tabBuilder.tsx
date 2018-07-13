import { TTheme } from '@module/setting/logic.redux/initalState'
import { getRoutes, getTabNavigationOptionsDefault } from '@router/helper/routerHelper'
import { getNavigationOptionsDefault } from '@router/helper/routerHelper'
import { AppText } from '@tpl/AppText'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs'

import { AppBottomTabBar } from '@tpl/AppBottomTabBar/AppBottomTabBar'
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
			tabBarComponent: AppBottomTabBar,
			navigationOptions: getTabNavigationOptionsDefault(themeType),
		},
	)
	ScreenTab.navigationOptions = {
		header: null,
	}
	return ScreenTab
}
