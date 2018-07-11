import { setting } from './setting/setting'
import { todo } from './todo/todo'

export interface TReduxModule {
	reducer?: any
	saga?: any
}
export interface TNavigationOptionsModule {
	title?: string,
	titleI18n?: string,
	tabBarIconName?: string,
	tabBarIcon?: any
}
export interface TScreenModule {
	screen: React.ComponentClass<{}>
	navigationOptions?: TNavigationOptionsModule
}

export interface TScreenLayoutModule {
	phone: TScreenModule,
	tablet?: TScreenModule
}
export interface TScreensModule {
	[screenKey: string]: TScreenLayoutModule
}
export interface TModule {
	redux?: TReduxModule
	screen?: TScreensModule
}
export interface TModules {
	[routeKey: string]: TModule
}

export const module = {
	setting,
	todo,
}
