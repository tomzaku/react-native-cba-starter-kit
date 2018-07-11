import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { compose, pure, setStatic } from 'recompose'
const Register = () => (
	<View>
		<Text>
			Register
		</Text>
	</View>
)
export const RegisterScreen = compose(pure)(Register)
