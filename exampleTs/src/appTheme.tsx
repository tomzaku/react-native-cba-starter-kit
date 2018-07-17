import { TRootState } from '@conf/redux/reducer'
import { AppRouter } from '@router/router'
import { getTheme } from '@theme/themeHelper'
import React from 'react'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { TTheme } from './module/setting/logic.redux/initalState'
import { ThemeContext } from './theme/helper/context'

interface AppThemePropsOut {

}
interface AppThemeStateProps {
	theme: TTheme
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
