import { TRootState } from '@conf/redux/reducer'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { compose, lifecycle, pure } from 'recompose'
const LoadingStartup = () => {
	console.log('>>>>><<<')
	return (
		<View />
	)
}

const mapStateToProps = (state: TRootState) => ({
	isAuthenticated: state.authentication.isAuthenticated,
})
const withRedux = connect(mapStateToProps)

const withLifeCycle = lifecycle({
	componentWillMount() {
		const { isAuthenticated, navigation } = this.props
		console.log('life circle', this.props)
		if (isAuthenticated) navigation.navigate('Main')
		else navigation.navigate('Auth')
	},
})

export const LoadingStartupScreen = compose(withRedux, pure, withLifeCycle)(LoadingStartup)
