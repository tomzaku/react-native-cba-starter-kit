import React from 'react'
import { compose } from 'recompose'
import { withContext } from 'with-context'
import { getTheme } from './themeHelper'

export const ThemeContext = React.createContext(getTheme())
export const withTheme = withContext(ThemeContext, 'theme')

export const withStyles = (getStyle: any) => Component => {
	const ThemeComponent = (props) => {
		console.log('ThemeComponent', props)
		const { theme, ...rest } = props
		return (
			<Component {...rest} styles={getStyle(theme)}/>
		)
	}
	const includeTheme = compose(withTheme)(ThemeComponent)
	return includeTheme
}
compose(withTheme)
