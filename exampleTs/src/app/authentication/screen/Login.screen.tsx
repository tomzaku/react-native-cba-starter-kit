import { withStyles, WithStyles  } from '@theme/theme'
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Fumi } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { NavigationInjectedProps } from 'react-navigation'
import { connect } from 'react-redux'
import { compose, pure, setStatic } from 'recompose'
import { Dispatch } from 'redux'
import { login } from '../redux/action'
import { style } from './Login.style'

interface LoginPropsOut extends NavigationInjectedProps{

}

interface LoginActionProps {
	login: (username: string, password: string) => () => void
}
interface LoginPropsIn extends LoginPropsOut, LoginActionProps, WithStyles<typeof style> {

}

const Login = ({ navigation, login, styles }: LoginPropsIn) => {
	let username: string
	let password: string
	return (
		<View style={styles.container}>
			<Fumi
				label={'Username'}
				iconClass={FontAwesomeIcon}
				iconName={'user'}
				iconColor={'#f95a25'}
				iconSize={20}
				style={{ height: 70 }}
				onChange={(e: any) => username = e.nativeEvent.text}
			/>
			{/* <TextInput onChange={(e)=> username = e.nativeEvent.text}/> */}
			<Fumi
				label={'Password'}
				iconClass={FontAwesomeIcon}
				iconName={'key'}
				iconColor={'#f95a25'}
				iconSize={20}
				style={{ height: 70 }}
				onChange={(e: any) => { password = e.nativeEvent.text }}

			/>
			{/* <Button title={'Login'} onPress={login('u:test', 'p:test')} style={styles.button}/> */}
			<Button title={'Login'} onPress={() => login(username, password)} style={styles.button}/>
			<Button title={'Register'} onPress={() => navigation.navigate('Register')} style={styles.button}/>
			<Button title={'Can I move to Setting Screen'} onPress={() => navigation.navigate('Setting')} style={styles.button}/>
		</View>
	)
}
const mapActionToProps = (dispatch: Dispatch, ownProps: LoginPropsOut) => ({
	login: (username: string, password: string) => {
		 dispatch(login(username, password))
		 ownProps.navigation.navigate('Loading')
		},
})

const withRedux = connect(undefined, mapActionToProps)

export const LoginScreen = compose<LoginPropsIn, LoginPropsOut>(withRedux, withStyles(style), pure)(Login)
