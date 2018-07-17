import { TRootState } from '@conf/redux/reducer'
import { TTheme } from '@module/setting/logic.redux/initalState'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { setupAuthRoute } from './authenticationRoute'
import { setupRoute  } from './setupRoute'

interface RouterAppPropsOut {}
interface RouterAppStateToProps {
	isAuthenticated: boolean
}
interface RouterAppPropsIn extends RouterAppPropsOut, RouterAppStateToProps {}

const RouterScreen = ({ isAuthenticated }: RouterAppPropsIn) => {
	if (isAuthenticated) {
		const MainRoute = setupRoute()
		return <MainRoute />
	}
	const AuthRoute = setupAuthRoute()
	return (
		<AuthRoute />
	)
}
const mapStateToProps = (state: TRootState) => ({
	isAuthenticated: state.authentication.isAuthenticated,
})
const withRedux = connect(mapStateToProps)
export const AppRouter = compose<RouterAppPropsIn, RouterAppPropsOut>(withRedux)(RouterScreen)
