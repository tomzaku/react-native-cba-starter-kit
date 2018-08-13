import Immutable from "seamless-immutable"
import ActionTypes from './actionType'

const {
  CHANGE_SAND_BOX
} = ActionTypes;

export const reducer = (state=Immutable({}), action) => {
  switch (action.type) {
    case CHANGE_SAND_BOX:
      return state
    default:
      return state
  }
}
export default reducer