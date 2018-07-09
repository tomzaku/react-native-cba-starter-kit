import { generateActionTypeList } from 'util/redux/actionType'

export default generateActionTypeList('todo', { actionType: [
  'UPDATE_TASK',
  'DELETE_TASK',
  'ADD_TASK',
  'ADD_TAG',
]})
