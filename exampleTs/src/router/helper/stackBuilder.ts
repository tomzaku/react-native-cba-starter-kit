import { TScreenModule, TScreensModule } from '@module/module'
import { isFunction } from '@util/type'
import { compose, mapObjIndexed } from 'ramda'
import { StackNavigatorConfig } from 'react-navigation'
import { getHeaderTitle } from './routerHelper'

type TRouteValue = (route: TScreenModule) => void | StackNavigatorConfig | Function
const updateRoute = (value: TRouteValue, key: string) => (route: TScreenModule) => {
	return {
		...route,
		navigationOptions: ({ navigationOptions }: StackNavigatorConfig) => ({
			...route.navigationOptions,
			[key]: isFunction(value) ? value(route) : value,
			...navigationOptions,
		}),
	}
}

export const getStackRoute = (listScreen: TScreensModule, options?: any) => {
	const handleEachRoute = compose(
		updateRoute(getHeaderTitle, 'headerTitle'),
	)
	const listScreenEnhance = mapObjIndexed(handleEachRoute)(listScreen)
	return listScreenEnhance
}
