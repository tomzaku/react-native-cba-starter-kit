import light from './light'
import dark from './dark'
import { Theme, ThemeProps } from 'react-native-elements';
import React from 'react'
import { ThemeConsumer } from 'react-native-elements';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type AppTheme = Theme<typeof light>

function withStyles<T extends AppTheme, U extends object, P= any>(getStyle:  (style: T) => U) {
	return  (Component: React.ComponentType<any>)  => {
		return (props: P) => {
			return (
				<ThemeConsumer>
					{({ theme }: { theme: T}) => (
						<Component {...props} styles={getStyle(theme)} />
					)}
				</ThemeConsumer>
			)
		}
	}
}

export type StyleRules<ClassKey extends string = string, typeStyle = ViewStyle | TextStyle | ImageStyle> = Record<ClassKey, typeStyle>

export type StyleRulesCallback<ClassKey extends string = string> = (
	theme: AppTheme,
) => StyleRules<ClassKey> // return the list all keys


export type WithStyles<T extends StyleRulesCallback | StyleRules> = {
	styles: StyleRules<
			T extends StyleRulesCallback<infer K> ? K : T extends StyleRules<infer K> ? K : never
		>,
}

export {
    light,
	dark,
	withStyles,
}