import { TThemeStyle } from '@theme/themeHelper'
import { StyleSheet } from 'react-native'

export const styles = ({ appStyle, palette }: TThemeStyle) => {
	return StyleSheet.create({
		container: appStyle.container.padding,
	})
}
