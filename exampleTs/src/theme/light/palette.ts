
const materialPalette = {
	common: {
		black: '#000',
		white: '#fff',
	},
	type: 'light',
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
		primary: 'rgba(0, 0, 0, 0.87)',
		secondary: 'rgba(0, 0, 0, 0.54)',
		disabled: 'rgba(0, 0, 0, 0.38)',
		hint: 'rgba(0, 0, 0, 0.38)',
	},
	divider: 'rgba(0, 0, 0, 0.12)',
	background: {
		paper: '#fff',
		default: '#fafafa',
	},
	action: {
		active: 'rgba(0, 0, 0, 0.54)',
		hover: 'rgba(0, 0, 0, 0.08)',
		hoverOpacity: 0.08,
		selected: 'rgba(0, 0, 0, 0.14)',
		disabled: 'rgba(0, 0, 0, 0.26)',
		disabledBackground: 'rgba(0, 0, 0, 0.12)',
	},
}
export const palette = {
	...materialPalette,
	avatar: {
		...materialPalette.primary,
	},
	button: {
		...materialPalette.primary,
	},
	card: {
		...materialPalette.primary,
	},
	icon: {
		...materialPalette.primary,
	},
	toolbar: {
		...materialPalette.primary,
	},
	tabbarNavigation: {
		main: materialPalette.background.default,
		activeLabel: materialPalette.primary.dark,
		inactiveLabel: materialPalette.grey['700'],
		activeIcon: materialPalette.primary.dark,
		inactiveIcon: materialPalette.grey['700'],
		borderColor: materialPalette.divider,
	},
}
