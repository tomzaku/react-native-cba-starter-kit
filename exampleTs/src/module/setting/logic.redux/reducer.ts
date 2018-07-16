import { cond, T } from 'ramda'
import { StatusBar } from 'react-native'
import { IAppAction } from './action'
import actionType from './actionType'
import { initialState, TAppState, TTheme } from './initalState'

const isLight = (paletteType: TTheme) => paletteType === 'light'
const reducer = (state: TAppState = initialState, action: IAppAction<any>) => {
  switch (action.type) {
	case actionType.CHANGE_THEME: {
		const branchPalette = cond([
			[
				isLight, () => {
				StatusBar.setBarStyle('light-content')
				return state.setIn(['theme', 'paletteType'], 'dark')
				},
			],
			[
				T, () => {
					StatusBar.setBarStyle('dark-content')
					return state.setIn(['theme', 'paletteType'], 'light')
				},
			],
		],
		)
		return branchPalette(state.theme.paletteType)
	}
	case actionType.CHANGE_LANGUAGE: {
		return state.setIn(['lang'], action.lang)
	}
	default: return state
  }
}

export default reducer
