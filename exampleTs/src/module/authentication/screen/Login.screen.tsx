import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { compose, pure, setStatic } from 'recompose'
import { Dispatch } from 'redux'
import { login } from '../logic.redux/action'
const Login = ({ navigation, login }) => (
	<View>
		<Button title={'Login'} onPress={login('u:test', 'p:test')}/>
		<Button title={'Register'} onPress={() => navigation.navigate('Register')} />
		<Button title={'Can I move to Setting Screen'} onPress={() => navigation.navigate('Setting')} />
	</View>
)
const mapActionToProps = (dispatch: Dispatch) => ({
	login: (username: string, password: string) => () => dispatch(login(username, password)),
})
const withRedux = connect(undefined, mapActionToProps)
export const LoginScreen = compose(withRedux, pure)(Login)
