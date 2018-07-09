import { IAppAction } from './action'
import actionType from './actionType'
import { initialState, TAppState } from './initalState'

const reducer = (state: TAppState = initialState, action: IAppAction<any>) => {
  switch (action.type) {
	case actionType.CHANGE_THEME: {
		const newStyle = state.theme.paletteType === 'light' ? 'dark' : 'light'
		return state.setIn(['theme', 'paletteType'], newStyle)
	}
	case actionType.CHANGE_LANGUAGE: {
		return state.setIn(['lang'], action.lang)
	}
	default: return state
  }
}

export default reducer
