import { TTheme } from '@theme/theme'
import { StyleSheet } from 'react-native'

export const styles = (theme: TTheme) => {
	const { appStyle, palette } = theme
	return StyleSheet.create({
		container: appStyle.container.padding,
	})
}
