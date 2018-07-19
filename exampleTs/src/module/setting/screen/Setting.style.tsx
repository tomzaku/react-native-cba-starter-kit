import { TTheme } from '@theme/light/light'
import { StyleSheet } from 'react-native'

export const styles = (theme: TTheme) => {
	const { appStyle, palette, spacing } = theme
	return StyleSheet.create({
		container: appStyle.container.padding,
		buttonStyle: {
			backgroundColor: palette.secondary.main,
			marginTop: spacing.unit,
		},
	})
}
