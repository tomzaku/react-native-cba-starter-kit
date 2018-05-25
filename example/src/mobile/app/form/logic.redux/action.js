import ActionTypes from './actionType'
const {
  CHANGE_FORM,
  CHANGE_FORM_SAGA,
} = ActionTypes;


export const doSomethingAwesome = () => ({
  type: 'CHANGE_FORM',
})