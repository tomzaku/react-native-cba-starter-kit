import { TTheme } from '@module/setting/logic.redux/initalState'
import { getNavigationOptionsTabDefault, getRoutes, getTabRouteConfigDefault } from '@router/helper/routerHelper'
import {
	addIndex,
	compose,
	map,
	mapObjIndexed,
	mergeAll,
	pick,
	} from 'ramda'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { getNavigationOptionsDefault, getTabMaterialRouteConfigDefault } from './routerHelper'
const mapIndexed = addIndex(map)
const getTabRoute = () => {

}
// type TRecusive = string | TListTabRoute

// interface TListTabRoute extends Array<string> {
// }
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
				navigationOptions: getNavigationOptionsDefault(),
			},
		),
	}
}
export const tabBuilder = (listTabRoute: (string | string[])[], themeType?: TTheme) => {
	const listRoute = getRoutes()
	// const tabRoute = compose(pick(listTabRoute))(listRoute)
	const tabRoute = compose(mergeAll, mapIndexed(compose(addStackNavigation)))(listTabRoute)
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
			navigationOptions: getNavigationOptionsTabDefault(themeType),
			// title:'ab',
		},
	)
	ScreenTab.navigationOptions = {
		header: null,
	}
	return ScreenTab
}
