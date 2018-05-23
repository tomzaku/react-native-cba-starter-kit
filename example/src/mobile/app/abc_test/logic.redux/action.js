import ActionTypes from './actionType'
const {
  CHANGE_ABC_TEST,
  CHANGE_ABC_TEST_SAGA,
} = ActionTypes;


export const doSomethingAwesome = () => ({
  type: 'CHANGE_ABC_TEST',
})