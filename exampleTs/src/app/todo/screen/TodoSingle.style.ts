import { TTheme } from '@theme/theme'
import { StyleSheet } from 'react-native'

export const styles = (theme: TTheme) => {
	const { appStyle } = theme
	return StyleSheet.create({
		container: appStyle.container.main,
	})
}
