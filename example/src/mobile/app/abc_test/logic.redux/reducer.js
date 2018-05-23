import Immutable from "seamless-immutable";
import ActionTypes from './actionType'

const {
  CHANGE_ABC_TEST
} = ActionTypes;

const reducer = (state=Immutable({}), action) => {
  switch (action.type) {
    case CHANGE_ABC_TEST:
      return state
    default:
      return state
  }
}