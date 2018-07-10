import React from 'react'
import { Text, View } from 'react-native'
import { compose } from 'recompose'

const SettingTablet = () => (
	<View>
		<Text>
			This is for tablet
		</Text>
	</View>
)

export const SettingTabletScreen = compose()(SettingTablet)
