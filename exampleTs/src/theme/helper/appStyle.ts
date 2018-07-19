
import { Platform, ViewStyle } from 'react-native'
import { TMetric } from '../light/metric'
import { Tpalette } from '../light/palette'
import { TTypography } from '../light/typography'

export const getAppStyle = (palette: Tpalette, metric: TMetric, typography: TTypography) => ({
	toolbar: {
		main: {
			backgroundColor: palette.toolbar.main,

		} as ViewStyle,
		text: {
			...typography.title,
			color: palette.toolbar.contrastText,
			...Platform.select({
				ios: {

				},
				android: {
					marginLeft: metric.toolbar.android.marginLeft,
				},
			}),
			// textAlign: 'center',
		},
		centerElement: {
			marginLeft: 0,
			// position: 'absolute',
			// width: '60%',
			alignItems: 'center',
			backgroundColor: 'red',
			paddingTop: metric.container.padding,
		} as ViewStyle,
	},
	tabbarNavigation: {
		main: {
			backgroundColor: palette.tabbarNavigation.main,
			borderTopWidth: metric.tabbarNavigation.borderTopWith,
			borderTopColor: palette.tabbarNavigation.borderColor,
		} as ViewStyle,
		activeTintColor: palette.tabbarNavigation.activeLabel,
		inactiveTintColor: palette.tabbarNavigation.inactiveLabel,
	},
	container: {
		main: {
			backgroundColor: palette.background.default,
			flex: 1,
		} as ViewStyle,
		padding: {
			backgroundColor: palette.background.default,
			flex: 1,
			padding: metric.container.padding,
		} as ViewStyle,
	},
}
)
