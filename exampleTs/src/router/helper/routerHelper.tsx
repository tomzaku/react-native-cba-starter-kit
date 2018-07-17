import { getScreenList } from '@module/helper/moduleHelper'
import { TNavigationOptionsModule, TScreenLayoutModule, TScreenModule } from '@module/module'
import { AppHeader } from '@tpl/AppHeader/AppHeader'
import { AppText } from '@tpl/AppText'
import { isFunction } from '@util/type'
import { compose, filter, isNil, mapObjIndexed, merge, mergeAll, path, values } from 'ramda'
import React from 'react'
import { isTablet } from 'react-native-device-info'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderProps, NavigationScreenConfig, NavigationScreenProp, NavigationScreenProps, StackNavigatorConfig } from 'react-navigation'

export const getNavigationOptionsDefault = (navigationOptionsOverride?: NavigationScreenConfig<any>) => {
	return (navigationConfig: NavigationScreenProps) => {
		const { navigationOptions } = navigationConfig
		const navigationOptionsOverrideEnhance = isFunction(navigationOptionsOverride)
													? navigationOptionsOverride(navigationConfig)
													: navigationOptionsOverride
		return {
			header: (props: HeaderProps) => <AppHeader {...props} />,
			...navigationOptions,
			...navigationOptionsOverrideEnhance,
		}
	}
}

export interface TTabBarIcon {
	focused: boolean
	tintColor: string
}
export const getRouteName = (navigation: NavigationScreenProp<any>) => {
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

export const getTabNavigationOptionsDefault = (navigationOptionsOverride?: StackNavigatorConfig) => {
	const routeList = getRoutes()
	return ({ navigation, navigationOptions }: NavigationScreenProps) => {
		const key = getRouteName(navigation)
		const routeNavigationOptions = routeList[key].navigationOptions
		const tabBarIcon = getTabBarIcon(routeNavigationOptions)
		return {
			tabBarIcon,
			tabBarLabel: getTabBarLabel(routeList[key]),
			...routeNavigationOptions,
			...navigationOptions,
			...navigationOptionsOverride,
		}
	}
}
interface TOptionsGetTabBarLabel {
	hidden?: boolean,
}
export const getTabBarLabel =  ({ navigationOptions = {} }: TScreenModule, options: TOptionsGetTabBarLabel = {}) => {
	const { title, titleI18n } = navigationOptions
	const { hidden = false } = options
	return ({ focused, tintColor }: TTabBarIcon) => {
		return (!hidden || focused) && <AppText text={titleI18n || title || ''} style={{ color: tintColor, textAlign: 'center' }} />
	}
}


export const mergeSpecificRoute = (route: TScreenLayoutModule, layoutTarget: string, layoutSource: string) => {
	return merge(path([layoutSource])(route), path([layoutTarget])(route))
}

export const getHeaderTitle = ({ navigationOptions = {} }: TScreenModule) => {
	const { title, titleI18n } = navigationOptions
	return (props: any) => {
		return <AppText {...props} text={titleI18n || title}/>
	}
}

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
	const routePhoneAndTablet = compose(mergeAll, values)(routeExtend) // include {KeyPhone and KeyTablet} for route contain 'tablet' props
	if (isTablet()) {
		const routeTabletList = mapObjIndexed((route: TScreenLayoutModule) => mergeSpecificRoute(route, 'tablet', 'phone'))(screenList)
		return merge(routeTabletList, routePhoneAndTablet)
	}
	const routePhoneList = mapObjIndexed(path(['phone']))(screenList)
	return merge(routePhoneList, routePhoneAndTablet)
}
