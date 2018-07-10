import { getScreenList } from '@module/helper/moduleHelper'
import { TNavigationOptionsModule, TScreenLayoutModule } from '@module/module'
import { TTheme } from '@module/setting/logic.redux/initalState'
import { getTheme } from '@theme/themeHelper'
import { compose, filter, isNil, mapObjIndexed, merge, mergeAll, path, values } from 'ramda'
import React from 'react'
import { isTablet } from 'react-native-device-info'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationScreenProp, NavigationScreenProps, StackNavigatorConfig } from 'react-navigation'

export const getNavigationOptionsDefault = (themeType?: TTheme, navigationOptions?: StackNavigatorConfig) => {
	const { appStyle } = getTheme(themeType)
	return ({ navigation, navigationOptions }: NavigationScreenProps) => ({
		headerStyle: {
			...appStyle.toolbar.main,
		},
		headerTitleStyle: {
			...appStyle.toolbar.text,
		  },
		// headerTintColor: color.TITLE_HIGHLIGH,
		...navigationOptions,
	})
}

export interface TTabBarIcon {
	focused: boolean
	tintColor: string
}
export const getKey = (navigation: NavigationScreenProp<any>) => {
	if (navigation.state.routes) {
		return navigation.state.routes[0].routeName
	}
	return navigation.state.routeName
}
export const getTabBarIcon = (moduleNavigationOptions: TNavigationOptionsModule) => {
	const { tabBarIcon, tabBarIconName } = moduleNavigationOptions
	if (tabBarIcon) return tabBarIcon
	const iconName = tabBarIconName || 'ios-bug'
	return ({ focused, tintColor }: TTabBarIcon) => <Ionicons name={iconName} size={24} color={tintColor}/>
}

export const getNavigationOptionsTabDefault = (themeType?: TTheme, navigationOptions?: StackNavigatorConfig) => {
	const { appStyle } = getTheme(themeType)
	const routeList = getRoutes()
	return ({ navigation, navigationOptions }: NavigationScreenProps) => {
		const key = getKey(navigation)
		const routeNavigationOptions = routeList[key].navigationOptions
		const tabBarIcon = getTabBarIcon(routeNavigationOptions)
		return {
			tabBarIcon,
			...routeNavigationOptions,
			// title: 'a',
		}
	}
}
export const getTabRouteConfigDefault = (themeType?: TTheme) => {
	const { appStyle, palette } = getTheme(themeType)
	return {
		activeTintColor: palette.tabbarNavigation.activeLabel,
		inactiveTintColor: palette.tabbarNavigation.inactiveLabel,
		tabStyle: appStyle.tabbarNavigation.main,
	}
}
export const getTabMaterialRouteConfigDefault = (themeType?: TTheme) => {
	const { appStyle, palette } = getTheme(themeType)
	return {
		activeTintColor: palette.tabbarNavigation.activeLabel,
		inactiveTintColor: palette.tabbarNavigation.inactiveLabel,
		barStyle: appStyle.tabbarNavigation.main,
		shifting: false,
		// animationEnabled: false,
		// lazy: true,
	}
}

export const mergeSpecificRoute = (route: TScreenLayoutModule, layoutTarget: string, layoutSource: string) => {
	return merge(path([layoutSource])(route), path([layoutTarget])(route))
}

const removeUndefinedItem = filter((item: any) => !isNil(item))

const extendPhoneAndTabletRoute = (route: TScreenLayoutModule, key: string) => {
	if (route.tablet) {
		return {
			[`${key}Phone`]: route.phone,
			[`${key}Tablet`]: mergeSpecificRoute(route, 'tablet', 'phone'),
		}
	}
	return undefined
}
export const getRoutes = () => {
	const screenList = getScreenList()
	const routeExtend = mapObjIndexed(extendPhoneAndTabletRoute)(screenList)
	const routeAddPhoneAndTablet = compose(mergeAll, values)(routeExtend)
	if (isTablet()) {
		const routeTabletList = mapObjIndexed((route: TScreenLayoutModule) => mergeSpecificRoute(route, 'tablet', 'phone'))(screenList)
		return merge(routeTabletList, routeAddPhoneAndTablet)
	}
	const routePhoneList = mapObjIndexed(path(['phone']))(screenList)
	return merge(routePhoneList, routeAddPhoneAndTablet)
}
