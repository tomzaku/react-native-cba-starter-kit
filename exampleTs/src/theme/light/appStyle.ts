import { ViewStyle } from '../../../node_modules/@types/react-native'
import { metric } from './metric'
import { palette } from './palette'
import { typography } from './typography'
export const appStyle = {
	toolbar: {
		main: {
			backgroundColor: palette.toolbar.main,
		} as ViewStyle,
		text: {
			...typography.title,
			color: palette.toolbar.contrastText,
		},
	},
	tabbarNavigation: {
		main: {
			backgroundColor: palette.tabbarNavigation.main,
		},
	},
	container: {
		main: {
			backgroundColor: palette.background.default,
		} as ViewStyle,
		padding: {
			backgroundColor: palette.background.default,
			padding: metric.container.padding,
		} as ViewStyle,
	},
}
