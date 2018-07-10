import { getTheme } from '@theme/themeHelper'
import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'

const Todo = () => {
	const { appStyle } = getTheme()
	return (
		<View style={appStyle.container.main}>
			<Text>
				Todo
			</Text>
		</View>
	)
}

export const TodoScreen = compose()(Todo)
