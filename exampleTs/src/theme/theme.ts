import { TPaletteType } from '@module/setting/logic.redux/initalState'
import { dark } from './dark/dark'
import { light } from './light/light'



export type TTheme = typeof light
export const getTheme = (themeType: TPaletteType = 'light') => {
	if (themeType === 'light') return light
	return dark
}

