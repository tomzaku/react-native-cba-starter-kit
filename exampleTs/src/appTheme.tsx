import { TRootState } from '@conf/redux/reducer'
import { AppRouter } from '@router/router'
import { getTheme } from '@theme/theme'
import React from 'react'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { TPaletteType } from './module/setting/redux/initalState'
import { ThemeContext } from './theme/theme'

interface AppThemePropsOut {

}
interface AppThemeStateProps {
	theme: TPaletteType
}
interface AppThemePropsIn extends AppThemePropsOut, AppThemeStateProps {

}

const AppTheme = ({ theme }: AppThemePropsIn) => (
	<ThemeContext.Provider value={getTheme(theme)} >
		<AppRouter />
	</ThemeContext.Provider >
)

const mapStateToProps = (state: TRootState) => ({
	theme: state.setting.theme.paletteType,
})
const withRedux = connect(mapStateToProps)
export const EnhanceAppTheme = compose<AppThemePropsIn, AppThemePropsOut>(withRedux, pure)(AppTheme)
