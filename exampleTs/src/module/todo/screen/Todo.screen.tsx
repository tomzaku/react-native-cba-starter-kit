import { withStyles, withTheme } from '@theme/helper/context'
import { getTheme } from '@theme/themeHelper'
import { AppText } from '@tpl/AppText'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { compose, getContext, withContext } from 'recompose'
import { styles } from './Todo.style'

const Todo = ({ styles, navigation }) => {
	return (
		<View style={styles.container}>
			<AppText text={'Todo'} style={{ color: 'blue' }} />
			<Button title={'Move to single'} onPress={() => navigation.navigate('TodoSingle')} />
			<Button title={'Move to Calendar'} onPress={() => navigation.navigate('Calendar')} />
		</View>
	)
}



export const TodoScreen = compose(withStyles(styles))(Todo)
