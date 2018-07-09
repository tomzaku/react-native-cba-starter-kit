import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'

const Setting = () => (
	<View>
		<Text>
			Setting
		</Text>
	</View>
)

export const SettingScreen = compose()(Setting)
