import React from 'react'
import { compose } from 'recompose'
import { withContext } from 'with-context'
import { palette } from '../dark/palette'
import { light, TStyle } from '../light/light'
import { getTheme } from '../themeHelper'

export const ThemeContext = React.createContext(getTheme())
export const withTheme = withContext(ThemeContext, 'theme')

// export const withStyles = (getStyle: any) => Component => {
export function withStyles<T extends TStyle, U>(getStyle:  (T: TStyle) => U) {
	return function (Component: React.ComponentClass<{}>) {
		const ThemeComponent = (props: any) => {
			const { theme, ...rest } = props
			return (
				<Component {...rest} styles={getStyle(theme)}/>
			)
		}
		const includeTheme = compose(withTheme)(ThemeComponent)
		return includeTheme
	}
}


// type IGetStyle = <T extends TStyle, U>(getStyle:  (T: TStyle) => U) => U

// type WithStyles<T extends TStyle, IGetStyle> = T
export interface WithStyles<T> {
	styles: any
}
// function withStyle<T extends TStyle, U>(getStyle:  (T: TStyle) => U) {
// 	return getStyle(light)
// }

// const sampleStyle = ({ palette, typography }: TStyle) => ({
// 	container: {
// 		backgroundColor: palette.error.dark,
// 	},
// })
// const abc = withStyle(sampleStyle)

// let testStyle:WithStyles<typeof sampleStyle>
// testStyle.container

