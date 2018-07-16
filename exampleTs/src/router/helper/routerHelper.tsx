import { getScreenList } from '@module/helper/moduleHelper'
import { TNavigationOptionsModule, TScreenLayoutModule } from '@module/module'
import { TTheme } from '@module/setting/logic.redux/initalState'
import { getTheme } from '@theme/themeHelper'
import { AppText } from '@tpl/AppText'
import { AppToolbar } from '@tpl/AppToobar/AppToobar'
import { AppToolbarReactNavigation } from '@tpl/AppToolbarReactNavigation/AppToolbarReactNavigation'
import { EnhanceI18n } from 'i18n'
import { compose, filter, isNil, mapObjIndexed, merge, mergeAll, path, values } from 'ramda'
import React from 'react'
import { View } from 'react-native'
import { isTablet } from 'react-native-device-info'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationScreenOptions, NavigationScreenProp, NavigationScreenProps, StackNavigatorConfig } from 'react-navigation'
import { TScreenModule } from '../../module/module'
import { AppHeader } from '../../tpl/AppHeader/AppHeader'
import { isFunction } from '../../util/type'

export const getNavigationOptionsDefault = (themeType?: TTheme, navigationOptionsOverride?: any) => {
	const { appStyle, palette } = getTheme(themeType)
	return (navigationConfig: NavigationScreenProps) => {
		const { navigationOptions } = navigationConfig
		const navigationOptionsOverrideEnhance = isFunction(navigationOptionsOverride)
													? navigationOptionsOverride(navigationConfig)
													: navigationOptionsOverride
		return {
			// headerStyle: {
			// 	...appStyle.toolbar.main,
			// },
			// headerTitleStyle: {
			// 	// ...appStyle.toolbar.text,
			// 	backgroundColor: 'red',
			// },
			// headerRight: <View style={{ flex:1, backgroundColor: 'red' }} />,
			// headerTintColor: palette.primary.contrastText,
			// headerTintColor: 'green',

			// header: (props) => {
			// 	return <AppToolbarReactNavigation {...props} />
			// },
			header: (props) => <AppHeader {...props} />,
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

export const getTabNavigationOptionsDefault = (themeType?: TTheme, navigationOptions?: StackNavigatorConfig) => {
	const { appStyle } = getTheme(themeType)
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
		}
	}
}
interface TOptionsGetTabBarLabel {
	hidden: boolean,
}
export const getTabBarLabel =  ({ navigationOptions }: TScreenModule, options?: TOptionsGetTabBarLabel = {}) => {
	const { title, titleI18n } = navigationOptions
	const { hidden = false } = options
	return ({ focused, tintColor }) => {
		return (!hidden || focused) && <AppText text={titleI18n || title} style={{ color: tintColor, textAlign: 'center' }} />
	}
}


export const mergeSpecificRoute = (route: TScreenLayoutModule, layoutTarget: string, layoutSource: string) => {
	return merge(path([layoutSource])(route), path([layoutTarget])(route))
}

export const getHeaderTitle = ({ navigationOptions }: TScreenModule) => {
	const { title, titleI18n } = navigationOptions
	return (props) => {
		return <AppText {...props} text={titleI18n || title}/>
	}
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
