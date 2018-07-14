
import { isIOS } from '@util/platform'
import { Platform, ViewStyle } from 'react-native'
import { TMetric } from '../light/metric'
import { Tpalette } from '../light/palette'
import { TTypography } from '../light/typography'
// import { metric } from './metric'
// import { palette } from './palette'
// import { typography } from './typography'
import { getStatusBarHeight } from './unit'
export const getAppStyle = (palette: Tpalette, metric: TMetric, typography: TTypography) => ({
	toolbar: {
		main: {
			backgroundColor: palette.toolbar.main,
			// flex: 1,
			// height: 52,
			// paddingTop: getStatusBarHeight(),
			// flexDirection: 'row',
			// alignItems: 'center',
			// overflow: 'hidden',

		} as ViewStyle,
		text: {
			...typography.title,
			color: palette.toolbar.contrastText,
			// textAlign: 'center',
			// color: 'red',
			// alignSelf:'center',
			// justifyContent: 'center',
			// alignSelf: "center",
			// flex: 1,
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
		},
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
