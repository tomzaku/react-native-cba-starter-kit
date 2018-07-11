import { getTheme } from '@theme/themeHelper'
import { AppText } from '@tpl/AppText'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { compose } from 'recompose'
import { styles } from './Todo.style'

const todoStyle = styles(getTheme())

const Todo = ({ navigation }) => {
	return (
		<View style={todoStyle.container}>
			<AppText />
			<Button title={'Move to single'} onPress={() => navigation.navigate('TodoSingle')} />
		</View>
	)
}


export const withTheme = (style: any) => {

}

export const TodoScreen = compose()(Todo)
