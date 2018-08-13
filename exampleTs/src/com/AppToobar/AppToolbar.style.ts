import { TTheme } from '@theme/theme'
import { StyleSheet } from 'react-native'

export const styles = ({ appStyle, palette }: TTheme) => StyleSheet.create({
	container: appStyle.toolbar.main,
	titleText: appStyle.toolbar.text,
	centerElementContainer: appStyle.toolbar.centerElement,
})

