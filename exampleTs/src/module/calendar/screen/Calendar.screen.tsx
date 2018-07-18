import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { compose, pure, setStatic, shouldUpdate, withState, withStateHandlers } from 'recompose'

const TestButton = ({ onPress }) => {
	console.log('Render?')
	return (
		<Button title={'Increase'} onPress={onPress} />
	)
}
const willRender = shouldUpdate(props => false)
const EnhanceTestButton = compose(willRender)(TestButton)
const Calendar = ({ incrementOn, counter }) => (
	<View>
		<Text>
			Calendar
		</Text>
		<Text>
			{counter}
		</Text>
		<EnhanceTestButton onPress={incrementOn}/>
	</View>
)

const createState = withStateHandlers(
	({ initialCounter = 0 }) => ({
		counter: initialCounter,
	}),
	{
		incrementOn: ({ counter }) => () => ({
			counter: counter + 1,
		}),
		decrementOn: ({ counter }) => () => ({
			counter: counter - 1,
		}),
		resetCounter: (_, { initialCounter = 0 }) => () => ({
			counter: initialCounter,
		}),
	},
  )

export const CalendarScreen = compose(
	createState,
	pure,
)(Calendar)
