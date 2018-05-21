import ActionTypes from './actionType'
const {
  CHANGE_STATUS
} = ActionTypes;

export const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  id
})