import { appStyle } from './appStyle'
import { metric } from './metric'
import { palette } from './palette'
import { spacing } from './spacing'
import { typography } from './typography'

export const light = {
	metric,
	palette,
	appStyle,
	spacing,
	typography,
}

export type TTheme = typeof light
