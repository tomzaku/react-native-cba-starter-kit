import ActionTypes from './actionType'
const {
  CHANGE_SAND_BOX,
  CHANGE_SAND_BOX_SAGA,
} = ActionTypes;


export const doSomethingAwesome = () => ({
  type: 'CHANGE_SAND_BOX',
})