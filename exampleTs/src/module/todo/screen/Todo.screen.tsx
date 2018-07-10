import { getTheme } from '@theme/themeHelper'
import { AppText } from '@tpl/AppText'
import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'

const Todo = () => {
	const { appStyle } = getTheme()
	return (
		<View style={appStyle.container.main}>
			<AppText />
		</View>
	)
}

export const TodoScreen = compose()(Todo)
