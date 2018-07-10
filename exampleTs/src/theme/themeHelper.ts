import { TTheme } from '@module/setting/logic.redux/initalState'
import { dark } from './dark/dark'
import { light } from './light/light'
export type TThemeStyle = typeof light
export const getTheme = (themeType: TTheme = 'light') => {
	if (themeType === 'light') return light
	return dark
}

