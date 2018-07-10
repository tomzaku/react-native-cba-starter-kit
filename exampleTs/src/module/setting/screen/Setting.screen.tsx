import { getTheme } from '@theme/themeHelper'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Dispatch } from 'redux'
import { changeLanguage, changeTheme } from '../logic.redux/action'


const Setting = ({ changeTheme, changeLanguage }) => {
	const { appStyle, palette, spacing } = getTheme()
	return (
		<View style={appStyle.container.padding}>
			<Button title={'Change Theme'} raised onPress={changeTheme}/>
			<Button title={'Change Language'} raised
				onPress={changeLanguage('vi')}
				buttonStyle={{
					backgroundColor: palette.secondary.main,
					marginTop: spacing.unit,
				}}
				/>
		</View>
	)
}
const mapActionToProps = (dispatch: Dispatch) => ({
	changeTheme: () => dispatch(changeTheme()),
	changeLanguage: (code: string) => () => dispatch(changeLanguage(code)),
})
const withRedux = connect(undefined, mapActionToProps)
export const SettingScreen = compose(withRedux)(Setting)
