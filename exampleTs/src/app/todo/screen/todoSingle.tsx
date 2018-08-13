import { withStyles, WithStyles } from '@theme/theme'
import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'
import { styles } from '../jss/todoSingle'

interface ToDoSinglePropsOut {

}
interface ToDoSinglePropsIn extends ToDoSinglePropsOut, WithStyles<typeof styles>{
}

const TodoSingle = ({ styles }: ToDoSinglePropsIn) => (
	<View style={styles.container}>
		<Text>
			Todo Single
		</Text>

	</View>
)

export const TodoSingleScreen = compose<ToDoSinglePropsIn, ToDoSinglePropsOut>(withStyles(styles))(TodoSingle)

