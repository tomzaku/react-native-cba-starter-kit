import { TTheme } from '@module/setting/logic.redux/initalState'
import { getRoutes, getTabNavigationOptionsDefault, getTabRouteConfigDefault } from '@router/helper/routerHelper'
import { getNavigationOptionsDefault, getTabMaterialRouteConfigDefault } from '@router/helper/routerHelper'
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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { getHeaderTitle } from './routerHelper'
const mapIndexed = addIndex(map)
const getTabRoute = () => {

}
// type TRecusive = string | TListTabRoute

// interface TListTabRoute extends Array<string> {
// }


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
				navigationOptions: getNavigationOptionsDefault(themeType, (navigationConfig) => {
					const { routeName } = navigationConfig.navigation.state
					console.log('>>>>navigationConfig', navigationConfig, listRoute[routeName])
					return {
						headerTitle: getHeaderTitle(listRoute[routeName]),
					}
					// headerTitle: getHeaderTitle
					// headerTitle: (props) => {
					// 	console.log('props', props)
					// 	return (<AppText text = {'signIn'} style={props.style[1]} / >)
					// },
				}),
			},
		),
	}
}
export const tabBuilder = (listTabRoute: (string | string[])[], themeType?: TTheme) => {
	const listRoute = getRoutes()
	// const tabRoute = compose(pick(listTabRoute))(listRoute)
	const tabRoute = compose(mergeAll, mapIndexed(compose(addStackNavigation(themeType))))(listTabRoute)
	// const ScreenTab = createMaterialBottomTabNavigator(
	const ScreenTab = createBottomTabNavigator(
		{
			...tabRoute,
		},
		{
			tabBarOptions: {
				...getTabRouteConfigDefault(themeType),
			},
			// ...getTabMaterialRouteConfigDefault(themeType),
			navigationOptions: getTabNavigationOptionsDefault(themeType),
			// title:'ab',
		},
	)
	ScreenTab.navigationOptions = {
		header: null,
	}
	return ScreenTab
}
