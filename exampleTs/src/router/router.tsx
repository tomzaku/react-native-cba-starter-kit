import { TRootState } from '@conf/redux/reducer'
import React from 'react'
import { connect } from 'react-redux'
import { compose, pure, shouldUpdate } from 'recompose'
import { setupRoute } from './setupRoute'

interface RouterAppPropsOut {}
interface RouterAppStateToProps {
	isAuthenticated: boolean
}
interface RouterAppPropsIn extends RouterAppPropsOut, RouterAppStateToProps {}

const RouterScreen = () => {
	const AppRoute = setupRoute()
	return <AppRoute />

}
const mapStateToProps = (state: TRootState) => ({
})
const withRedux = connect(mapStateToProps)
export const AppRouter = compose<RouterAppPropsIn, RouterAppPropsOut>(withRedux)(RouterScreen)
