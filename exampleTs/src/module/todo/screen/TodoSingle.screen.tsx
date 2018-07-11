import { withStyles } from '@theme/context'
import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'
import { styles } from './TodoSingle.style'

const TodoSingle = ({ styles }) => (
	<View style={styles.container}>
		<Text>
			Todo Single
		</Text>
	</View>
)

export const TodoSingleScreen = compose(withStyles(styles))(TodoSingle)

