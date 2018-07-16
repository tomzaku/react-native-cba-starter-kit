import { logout } from '@module/authentication/logic.redux/action'
import { changeLanguage, changeTheme } from '@module/setting/logic.redux/action'
import { withStyles, WithStyles } from '@theme/helper/context'
import { getTheme } from '@theme/themeHelper'
import { AppText } from '@tpl/AppText'
import React from 'react'
import { Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationInjectedProps } from 'react-navigation'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Dispatch } from 'redux'
import { styles } from './Setting.style'

interface SettingScreenPropsOut {

}
interface SettingScreenActionProps {
	changeTheme: () => void
	changeLanguage: (code: string) => () => void
	logout: () => void
}
interface SettingScreenPropsIn extends WithStyles<typeof styles>, SettingScreenPropsOut, NavigationInjectedProps, SettingScreenActionProps{

}

const Setting = ({ changeTheme, changeLanguage, navigation, styles, logout }: SettingScreenPropsIn) => {
	return (
		<View style={styles.container}>
			{/* <Button title={'Change Theme'} raised onPress={changeTheme}/> */}
			<Button
				title={<AppText text="SettingTheme.changeTheme" />}
				raised
				onPress={() => navigation.navigate('SelectTheme')}
			/>

			<Button
				title={'Change To Vi'}
				raised
				onPress={changeLanguage('vi')}
				buttonStyle={styles.buttonStyle}
			/>
			<Button
				title={'Change To En'}
				raised
				onPress={changeLanguage('en')}
				buttonStyle={styles.buttonStyle}
			/>
			<Button
				title={'Logout'}
				raised
				onPress={logout}
				buttonStyle={styles.buttonStyle}
			/>
		</View>
	)
}

const mapActionToProps = (dispatch: Dispatch) => ({
	changeTheme: () => dispatch(changeTheme()),
	changeLanguage: (code: string) => () => dispatch(changeLanguage(code)),
	logout: () => dispatch(logout()),
})

const withRedux = connect(undefined, mapActionToProps)


export const SettingScreen = compose<SettingScreenPropsIn, SettingScreenPropsOut>(withRedux, withStyles(styles))(Setting)
