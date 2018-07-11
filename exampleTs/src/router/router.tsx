import { TRootState } from '@conf/redux/reducer'
import { TTheme } from '@module/setting/logic.redux/initalState'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { setupAuthRoute } from './authenticationRoute'
import { setupRoute  } from './setupRoute'

interface RouterAppPropsOut {}
interface RouterAppStateToProps {
	theme: TTheme
	isAuthenticated: boolean
}
interface RouterAppPropsIn extends RouterAppPropsOut, RouterAppStateToProps {}

const RouterScreen = ({ theme, isAuthenticated }: RouterAppPropsIn) => {
	if (isAuthenticated) {
		const MainRoute = setupRoute(theme)
		return <MainRoute />
	}
	const AuthRoute = setupAuthRoute(theme)
	return (
		<AuthRoute />
	)
}
const mapStateToProps = (state: TRootState) => ({
	theme: state.setting.theme.paletteType,
	isAuthenticated: state.authentication.isAuthenticated,
})
const withRedux = connect(mapStateToProps)
// export const AppRouter = compose<RouterAppPropsIn, RouterAppPropsOut>()(RouterScreen)
export const AppRouter = compose<RouterAppPropsIn, RouterAppPropsOut>(withRedux)(RouterScreen)
