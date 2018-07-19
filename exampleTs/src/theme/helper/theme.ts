import { TPaletteType } from '@module/setting/logic.redux/initalState'
import { dark } from '../dark/dark'
import { light } from '../light/light'

type TTheme = typeof light
const getTheme = (themeType: TPaletteType = 'light') => {
	if (themeType === 'light') return light
	return dark
}

export {
	TTheme,
	getTheme,
}
