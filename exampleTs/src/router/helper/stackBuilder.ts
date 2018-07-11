import { TScreensModule } from '@module/module'
import { compose, mapObjIndexed } from 'ramda'
import { isFunction } from '../../util/type'
import { getHeaderTitle } from './routerHelper'

const updateRoute = (value, key) => (route) => {
	return {
		...route,
		navigationOptions: ({ navigationOptions }) => ({
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
