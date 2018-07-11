import { generateActionTypeList } from '@util/redux/actionType'

export const actionType = generateActionTypeList('todo', { actionType: [
  'LOGIN_SUCCESSFULLY',
  'LOGOUT',
]})
