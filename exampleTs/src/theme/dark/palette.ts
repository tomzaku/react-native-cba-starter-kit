import { ViewStyle } from 'react-native'
import { getPalette } from '../helper/palette'

const darkMaterialPalette = {
	common: {
		black: '#000',
		white: '#fff',
	},
	type: 'dark',
	primary: {
		light: '#7986cb',
		main: '#3f51b5',
		dark: '#303f9f',
		contrastText: '#fff',
	},
	secondary: {
		light: '#ff4081',
		main: '#f50057',
		dark: '#c51162',
		contrastText: '#fff',
	},
	error: {
		light: '#e57373',
		main: '#f44336',
		dark: '#d32f2f',
		contrastText: '#fff',
	},
	grey: {
		50: '#fafafa',
		100: '#f5f5f5',
		200: '#eeeeee',
		300: '#e0e0e0',
		400: '#bdbdbd',
		500: '#9e9e9e',
		600: '#757575',
		700: '#616161',
		800: '#424242',
		900: '#212121',
		A100: '#d5d5d5',
		A200: '#aaaaaa',
		A400: '#303030',
		A700: '#616161',
	},
	contrastThreshold: 3,
	tonalOffset: 0.2,
	text: {
		primary: '#fff',
		secondary: 'rgba(255, 255, 255, 0.7)',
		disabled: 'rgba(255, 255, 255, 0.5)',
		hint: 'rgba(255, 255, 255, 0.5)',
		icon: 'rgba(255, 255, 255, 0.5)',
	},
	divider: 'rgba(255, 255, 255, 0.12)',
	background: {
		paper: '#424242',
		default: '#000',
	},
	action: {
		active: '#fff',
		hover: 'rgba(255, 255, 255, 0.1)',
		hoverOpacity: 0.1,
		selected: 'rgba(255, 255, 255, 0.2)',
		disabled: 'rgba(255, 255, 255, 0.3)',
		disabledBackground: 'rgba(255, 255, 255, 0.12)',
	},
}

const overideComponent = {
	tabbarNavigation: {
		main: darkMaterialPalette.background.default,
		activeLabel: darkMaterialPalette.common.white,
		inactiveLabel: darkMaterialPalette.grey['600'],
		activeIcon: darkMaterialPalette.common.white,
		inactiveIcon: darkMaterialPalette.grey['600'],
		borderColor: darkMaterialPalette.divider,
	},
	toolbar: {
		light: darkMaterialPalette.background.default,
		main: darkMaterialPalette.background.default,
		dark: darkMaterialPalette.background.default,
		contrastText: '#fff',
	},
}

export const palette = getPalette(darkMaterialPalette, overideComponent)
