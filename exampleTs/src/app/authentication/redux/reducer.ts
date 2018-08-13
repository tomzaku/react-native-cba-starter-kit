import { actionType } from './actionType'
import { initialState } from './initialState'

export interface AuthActionType {
	type: typeof actionType
	username?: string,
	password?: string
}
export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actionType.LOGIN_SUCCESSFULLY: {
			return state.setIn(['isAuthenticated'], true)
		}
		case actionType.LOGOUT: {
			return state.setIn(['isAuthenticated'], false)
		}
		default:
			return state
	}
}

export default reducer
