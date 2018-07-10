import { getTheme } from '@theme/themeHelper'
import { AppText } from '@tpl/AppText'
import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'
import { styles } from './Todo.style'

const todoStyle = styles(getTheme())

const Todo = () => {
	return (
		<View style={todoStyle.container}>
			<AppText />
		</View>
	)
}

export const TodoScreen = compose()(Todo)
