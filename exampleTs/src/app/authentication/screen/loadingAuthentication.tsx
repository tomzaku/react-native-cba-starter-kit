import { TRootState } from '@conf/redux/reducer'
import React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { connect } from 'react-redux'
import { compose, lifecycle, pure } from 'recompose'

interface LoadingAuthenticationScreenPropsOut {

}
interface LoadingAuthenticationScreenStateProps {
	isAuthenticated: false
}
interface LoadingAuthenticationScreenState {

}
interface LoadingAuthenticationScreenPropsIn extends LoadingAuthenticationScreenPropsOut,
NavigationInjectedProps, LoadingAuthenticationScreenStateProps {

}

const LoadingAuthentication = () => {
	return (
		<View />
	)
}

const mapStateToProps = (state: TRootState) => ({
	isAuthenticated: state.authentication.isAuthenticated,
})
const withRedux = connect(mapStateToProps)

const withLifeCycle = lifecycle<LoadingAuthenticationScreenPropsIn, LoadingAuthenticationScreenState>({
	componentDidMount() {
		const { isAuthenticated, navigation } = this.props
		if (isAuthenticated) navigation.navigate('Main')
		else navigation.navigate('Auth')
	},
})

export const LoadingAuthenticationScreen =
	compose<LoadingAuthenticationScreenPropsIn, LoadingAuthenticationScreenPropsOut>(withRedux, pure, withLifeCycle)(LoadingAuthentication)
