import React from 'react'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { withContext } from 'with-context'
import { getTheme, TTheme } from './theme'

export const ThemeContext = React.createContext(getTheme())
export const withTheme = withContext(ThemeContext, 'theme')

export function withStyles<T extends TTheme, U extends object>(getStyle:  (style: T) => U) {
	return function (Component: React.ComponentClass<{}>) {
		const ThemeComponent = (props: any) => {
			return (
				<ThemeContext.Consumer>
					{(theme: T) => (
						<Component {...props} styles={getStyle(theme)}/>

					)}
				</ThemeContext.Consumer>
			)
		}
		return ThemeComponent
	}
}
// StyleRules is object including key: ClassKey and value: ViewwStyle | TextStyle | ImageStyle
export type StyleRules<ClassKey extends string = string, typeStyle = ViewStyle | TextStyle | ImageStyle> = Record<ClassKey, typeStyle>
// export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>

// StyleRulesCallback is a function of styles: (theme) => StyleSheet.create({})
// ClassKey is received by 'infer K': all parameter of
export type StyleRulesCallback<ClassKey extends string = string> = (
	theme: TTheme,
) => StyleRules<ClassKey> // return the list all keys

export type WithStyles<T extends StyleRulesCallback | StyleRules> = {
	styles: StyleRules<
			// Get Key of function
			// if T === StyleRulesCallback<infer K>  ==> K will be of list of keys of value
			// like this () => value
			// elsr if T === StyleRules<infer K> ===> K will be of list of keys: container, text of value
			// like this : {container: {}, text: {}}
			T extends StyleRulesCallback<infer K> ? K : T extends StyleRules<infer K> ? K : never
		>,
}
