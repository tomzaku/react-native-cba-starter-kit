import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'
const TodoSingle = () => (
	<View>
		<Text>
			Todo Single
		</Text>
	</View>
)

export const TodoSingleScreen = compose()(TodoSingle)
