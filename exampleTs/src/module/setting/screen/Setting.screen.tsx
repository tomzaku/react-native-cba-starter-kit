import { changeLanguage, changeTheme } from '@module/setting/logic.redux/action'
import { getTheme } from '@theme/themeHelper'
import React from 'react'
import { Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Dispatch } from 'redux'


const Setting = ({ changeTheme, changeLanguage, navigation, themeType }) => {
	const { appStyle, palette, spacing } = getTheme(themeType)
	return (
		<View style={appStyle.container.padding}>
			{/* <Button title={'Change Theme'} raised onPress={changeTheme}/> */}
			<Button title={'Change Theme'} raised
			onPress={() => navigation.navigate('SelectTheme')}/>
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

const mapStateToProps = (state: TRootState) => ({
	themeType: state.setting.theme.paletteType,
})

const mapActionToProps = (dispatch: Dispatch) => ({
	changeTheme: () => dispatch(changeTheme()),
	changeLanguage: (code: string) => () => dispatch(changeLanguage(code)),
})
const withRedux = connect(mapStateToProps, mapActionToProps)
export const SettingScreen = compose(withRedux)(Setting)
