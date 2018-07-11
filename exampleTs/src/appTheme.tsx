import { TRootState } from '@conf/redux/reducer'
import { AppRouter } from '@router/router'
import { getTheme } from '@theme/themeHelper'
import React from 'react'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { ThemeContext } from './theme/context'

const AppTheme = ({ theme }) => {
	return (
	<ThemeContext.Provider value={getTheme(theme)} >
		<AppRouter />
	</ThemeContext.Provider >
)}

const mapStateToProps = (state: TRootState) => ({
	theme: state.setting.theme.paletteType,
})
const withRedux = connect(mapStateToProps)
export const EnhanceAppTheme = compose(withRedux, pure)(AppTheme)
