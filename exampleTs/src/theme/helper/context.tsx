import React from 'react'
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

export interface WithStyles<T> {
	styles: any
}
