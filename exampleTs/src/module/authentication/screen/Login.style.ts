import { TStyle } from '@theme/light/light'
import { StyleSheet } from 'react-native'
export const style = ({ palette, appStyle, spacing }: TStyle) => StyleSheet.create({
	container: appStyle.container.padding,
	button: {
		paddingVertical: spacing.unit,
	},
})
