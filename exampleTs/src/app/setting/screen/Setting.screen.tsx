import { logout } from '@app/authentication/redux/action'
import { changeLanguage, changeTheme } from '@app/setting/redux/action'
import { AppText } from '@com/AppText'
import { WithStyles, withStyles } from '@theme/theme'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { NavigationInjectedProps } from 'react-navigation'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Dispatch } from 'redux'
import { styles } from './Setting.style'

interface SettingScreenPropsOut extends NavigationInjectedProps{

}
interface SettingScreenActionProps {
	changeTheme: () => void
	changeLanguage: (code: string) => () => void
	logout: () => void
}
interface SettingScreenPropsIn extends WithStyles<typeof styles>, SettingScreenPropsOut, SettingScreenActionProps{

}

const Setting = ({ changeLanguage, navigation, styles, logout }: SettingScreenPropsIn) => {
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

const mapActionToProps = (dispatch: Dispatch, ownProps: SettingScreenPropsOut) => ({
	changeTheme: () => dispatch(changeTheme()),
	changeLanguage: (code: string) => () => dispatch(changeLanguage(code)),
	logout: () => {
		dispatch(logout())
		ownProps.navigation.navigate('Loading')
	},
})

const withRedux = connect(undefined, mapActionToProps)


export const SettingScreen = compose<SettingScreenPropsIn, SettingScreenPropsOut>(withRedux, withStyles(styles))(Setting)
