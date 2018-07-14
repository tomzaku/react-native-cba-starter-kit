import React from 'react'
import { Text, View } from 'react-native'
import { compose, pure, setStatic } from 'recompose'

const Calendar = () => (
	<View>
		<Text>
			Calendar
		</Text>
	</View>
)
const withStatic = setStatic(
	'navigationOptions',
	{
		headerTitle: 'abc',
	},
	// (navigation) => {
	// 	return {
	// 		// headerTitle: 'ABC',
	// 		// header: null,
	// 		navigationOptions: {
	// 			title: 'ABC',
	// 		},
	// 	}
	// },
)
export const CalendarScreen = compose(
	// withStatic,
	pure,
	)(Calendar)
