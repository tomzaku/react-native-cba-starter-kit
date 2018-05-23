import Immutable from 'seamless-immutable';
import ActionTypes from './actionType'
const {
  LOGIN_SUCCESSFUL,
  LOGOUT
} = ActionTypes;

const initialState = Immutable({
  isAuthenticated: false
})

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESSFUL: {
      return state.set('isAuthenticated', true)
    }
    case LOGOUT: {
      return state.set('isAuthenticated', false)
    }
    default: return state
  }
}
export default reducer