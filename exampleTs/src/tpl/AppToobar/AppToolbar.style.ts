import { TThemeStyle } from '@theme/themeHelper'
import { StyleSheet } from 'react-native'

export const styles = ({ appStyle, palette }: TThemeStyle) => StyleSheet.create({
	container: appStyle.toolbar.main,
	titleText: appStyle.toolbar.text,
	centerElementContainer: appStyle.toolbar.centerElement,
})

