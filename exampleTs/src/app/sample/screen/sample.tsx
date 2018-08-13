import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'
const Sample = () => (
	<View>
		<Text>Sample</Text>
	</View>
)
export const SampleScreen = compose()(Sample)
