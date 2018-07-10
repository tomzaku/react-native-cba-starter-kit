import { TRootState } from '@conf/redux/reducer'
import { getTheme } from '@theme/themeHelper'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch } from 'redux'
import { changeTheme } from '../logic.redux/action'

const SelectTheme = ({ changeTheme, themeType }) => {
	const { appStyle } = getTheme(themeType)
	return (
		<View style={appStyle.container.main}>
			<Button title={'Change Theme'} raised onPress={changeTheme}/>
		</View>
	)
}

const mapStateToProps = (state: TRootState) => ({
	themeType: state.setting.theme.paletteType,
})

const mapActionToProps = (dispatch: Dispatch) => ({
	changeTheme: () => dispatch(changeTheme()),
})

const withRedux = connect(mapStateToProps, mapActionToProps)

export const SelectThemeScreen = compose(withRedux, pure)(SelectTheme)
