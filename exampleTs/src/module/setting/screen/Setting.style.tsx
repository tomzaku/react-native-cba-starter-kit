import { TThemeStyle } from '@theme/themeHelper'
import { StyleSheet } from 'react-native'

export const styles = (theme: TThemeStyle) => {
	const { appStyle, palette, spacing } = theme
	return StyleSheet.create({
		container: appStyle.container.padding,
		buttonStyle: {
			backgroundColor: palette.secondary.main,
			marginTop: spacing.unit,
		},
	})
}
