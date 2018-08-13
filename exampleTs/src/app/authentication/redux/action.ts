import { actionType } from './actionType'
export const login = (username: string, password: string) => {
	return {
		username,
		password,
		type: actionType.LOGIN_SUCCESSFULLY,
	}
}

export const logout = () => {
	return {
		type: actionType.LOGOUT,
	}
}
