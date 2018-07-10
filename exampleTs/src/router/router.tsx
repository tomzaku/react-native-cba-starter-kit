import { TRootState } from '@conf/redux/reducer'
import { TTheme } from '@module/setting/logic.redux/initalState'
import { setupRoute } from '@router/setupRoute'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'

interface RouterAppPropsOut {}
interface RouterAppStateToProps {
	theme: TTheme
}
interface RouterAppPropsIn extends RouterAppPropsOut, RouterAppStateToProps {}

const RouterScreen = ({ theme }: RouterAppPropsIn) => {
	const MainRoute = setupRoute(theme)
	return (
		<MainRoute/>
	)
}
const mapStateToProps = (state: TRootState) => ({
	theme: state.setting.theme.paletteType,
})
const withRedux = connect(mapStateToProps)
export const AppRouter = compose<RouterAppPropsIn, RouterAppPropsOut>(withRedux)(RouterScreen)
