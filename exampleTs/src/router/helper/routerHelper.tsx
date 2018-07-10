import { getScreenList } from '@module/helper/moduleHelper'
import { TNavigationOptionsModule } from '@module/module'
import { TTheme } from '@module/setting/logic.redux/initalState'
import { getTheme } from '@theme/themeHelper'
import React from 'react'
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
	const { appStyle } = getTheme(themeType)
	return {
		activeTintColor: appStyle.tabbarNavigation.activeTintColor,
		inactiveTintColor: appStyle.tabbarNavigation.inactiveTintColor,
		barStyle: appStyle.tabbarNavigation.main,
	}
}

export const getRoutes = () => {
	const screenList = getScreenList()
	return screenList
}
