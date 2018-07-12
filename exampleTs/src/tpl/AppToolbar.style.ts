import { StyleSheet } from 'react-native'
import { TThemeStyle } from '../theme/themeHelper'

export const styles = ({ appStyle, palette }: TThemeStyle) => StyleSheet.create({
	container: appStyle.toolbar.main,
	titleText: appStyle.toolbar.text,
	centerElementContainer: appStyle.toolbar.centerElement,
})

