import Immutable from "seamless-immutable";
import ActionTypes from './actionType'

const {
  CHANGE_FORM
} = ActionTypes;

const reducer = (state=Immutable({}), action) => {
  switch (action.type) {
    case CHANGE_FORM:
      return state
    default:
      return state
  }
}