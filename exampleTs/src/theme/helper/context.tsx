import React from 'react'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { compose } from 'recompose'
import { withContext } from 'with-context'
import { palette } from '../dark/palette'
import { light, TStyle } from '../light/light'
import { getTheme } from '../themeHelper'

export const ThemeContext = React.createContext(getTheme())
export const withTheme = withContext(ThemeContext, 'theme')

export function withStyles<T extends TStyle, U extends object>(getStyle:  (style: T) => U) {
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

const sampleData = ({ palette }: TStyle) => ({
	container:{
		backgroundColor: palette.error.dark,
	},
})
// const style = withStyles(sampleData)
let style :WithStyles<typeof sampleData>
style = {
	styles: {
		container: 'black',
		containerThrowError: 'black',
	},
}

// export interface CSSProperties extends CSS.Properties<number | string> {
// 	// Allow pseudo selectors and media queries
// 	[k: string]: CSS.Properties<number | string>[keyof CSS.Properties] | CSSProperties;
//   }
export type StyleRules<ClassKey extends string = string> = Record<ClassKey, ViewStyle | TextStyle | ImageStyle>
export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>

export type StyleRulesCallback<ClassKey extends string = string> = (
	theme: TStyle,
  ) => StyleRules<ClassKey>

export type WithStyles<T extends StyleRulesCallback | StyleRules> = {
	// T extends StyleRulesCallback<infer K> ? K : something
	// Means K is list a string key depend on StyleRuleCallback return
	styles: ClassNameMap<T extends StyleRulesCallback<infer K> ? K : T extends StyleRules<infer K> ? K : never>,
  }

interface IGetStyle<T extends TStyle, U extends object> {
	(getStyle: (style: T) => U): U
}
// type getStyle = (style: TStyle)
// export interface WithStyles<T> {
// 	styles: any
// }


