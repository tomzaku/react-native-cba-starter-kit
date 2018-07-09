import { TextStyle } from '../../../node_modules/@types/react-native'
import { isIOS } from '../../util/platform'
import { getEm } from '../unit'

const generalTypography = {
	fontFamily: isIOS() ? 'San Francisco' : 'Roboto',
	fontSize: 16,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
}

const em = getEm(generalTypography.fontSize)

const materialTypography = {
	general: generalTypography,
	display4: {
		fontSize: em(3),
		fontWeight: '300',
		fontFamily: generalTypography.fontFamily,
		letterSpacing: -em(0.04),
		lineHeight: em(1.2),
		marginLeft: -em(0.04),
		color: 'rgba(0, 0, 0, 0.54)',
	} as TextStyle,
	display3: {
		fontSize: em(2.7),
		fontWeight: '400',
		fontFamily: generalTypography.fontFamily,
		letterSpacing: -em(0.02),
		lineHeight: em(1.3),
		marginLeft: em(0.02),
		color: 'rgba(0, 0, 0, 0.54)',
	} as TextStyle,
	display2: {
		fontSize: em(2.5),
		fontWeight: '400',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.06),
		marginLeft: -em(0.02),
		color: 'rgba(0, 0, 0, 0.54)',
	} as TextStyle,
	display1: {
		fontSize: em(2),
		fontWeight: '400',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.2),
		color: 'rgba(0, 0, 0, 0.54)',
	} as TextStyle,
	headline: {
		fontSize: em(1.5),
		fontWeight: '400',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.34),
		color: 'rgba(0, 0, 0, 0.87)',
	} as TextStyle,
	title: {
		fontSize: em(1.3),
		fontWeight: '500',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.16),
		color: 'rgba(0, 0, 0, 0.87)',
	} as TextStyle,
	subheading: {
		fontSize: em(1),
		fontWeight: '400',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.5),
		color: 'rgba(0, 0, 0, 0.87)',
	} as TextStyle,
	body2: {
		fontSize: em(0.875),
		fontWeight: '500',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.71),
		color: 'rgba(0, 0, 0, 0.87)',
	} as TextStyle,
	body1: {
		fontSize: em(0.875),
		fontWeight: '400',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.46),
		color: 'rgba(0, 0, 0, 0.87)',
	} as TextStyle,
	caption: {
		fontSize: em(0.76),
		fontWeight: '400',
		fontFamily: generalTypography.fontFamily,
		lineHeight: em(1.375),
		color: 'rgba(0, 0, 0, 0.54)',
	} as TextStyle,
	button: {
		fontSize: em(0.875),
		fontWeight: '500',
		fontFamily: generalTypography.fontFamily,
		color: 'rgba(0, 0, 0, 0.87)',
	} as TextStyle,
}

export const typography = {
	...materialTypography,
}
