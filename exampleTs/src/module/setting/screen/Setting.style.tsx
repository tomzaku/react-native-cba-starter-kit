import { TStyle } from '@theme/light/light'
import { StyleSheet } from 'react-native'

export const styles = (theme: TStyle) => {
	const { appStyle, palette, spacing } = theme
	return StyleSheet.create({
		container: appStyle.container.padding,
		buttonStyle: {
			backgroundColor: palette.secondary.main,
			marginTop: spacing.unit,
		},
	})
}
