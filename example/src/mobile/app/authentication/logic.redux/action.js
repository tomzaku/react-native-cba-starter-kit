import ActionTypes from './actionType'
const {
  LOGIN_SUCCESSFUL,
  LOGOUT
} = ActionTypes;

export const login = (username, password) => {
  return {
    type: LOGIN_SUCCESSFUL
  }
}

export const logout = (username, password) => {
  return {
    type: LOGOUT,
  }
}