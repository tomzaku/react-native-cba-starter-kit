import { TTheme } from '@theme/light/light'
import { StyleSheet } from 'react-native'
export const style = ({ palette, appStyle, spacing }: TTheme) => StyleSheet.create({
	container: appStyle.container.padding,
	button: {
		paddingVertical: spacing.unit,
	},
})
