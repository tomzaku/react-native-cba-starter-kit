import { TThemeStyle } from '@theme/themeHelper'
import { StyleSheet } from 'react-native'

export const styles = (theme: TThemeStyle) => {
	console.log('Theme', theme)
	const { appStyle, palette } = theme
	return StyleSheet.create({
		container: appStyle.container.padding,
	})
}
