import { TBasicPalette } from '@theme/light/palette'
interface ComponentPalette {
	avatar?: any,
	button?: any,
	card?: any,
	icon?: any,
	toolbar?: any,
	tabbarNavigation?: any,
}
export const getPalette = (palette: TBasicPalette, overrideComponent: ComponentPalette = {}) => ({
	...palette,
	avatar: {
		...palette.primary,
	},
	button: {
		...palette.primary,
	},
	card: {
		...palette.primary,
	},
	icon: {
		...palette.primary,
	},
	toolbar: {
		...palette.primary,
	},
	tabbarNavigation: {
		main: palette.background.default,
		activeLabel: palette.primary.dark,
		inactiveLabel: palette.grey['700'],
		activeIcon: palette.primary.dark,
		inactiveIcon: palette.grey['700'],
		borderColor: palette.divider,
	},
	...overrideComponent,
})
