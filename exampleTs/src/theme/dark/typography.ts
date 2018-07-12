import { isIOS } from '@util/platform'
import { TextStyle } from 'react-native'
import { getTypographyByEm } from '../helper/typography'
import { getEm } from '../helper/unit'

const generalTypography = {
	fontFamily: isIOS() ? 'FontAwesome' : 'Roboto',
	fontSize: 14,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
}

const em = getEm(generalTypography.fontSize)

export const typography = getTypographyByEm(em, generalTypography)
