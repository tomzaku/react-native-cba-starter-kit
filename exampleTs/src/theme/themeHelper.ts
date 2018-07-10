import { TTheme } from '@module/setting/logic.redux/initalState'
import { light } from './light/light'

export const getTheme = (themeType: TTheme = 'light') => {
	if (themeType === 'light') return light
	return light
}

