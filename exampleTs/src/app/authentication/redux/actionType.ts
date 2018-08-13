import { generateActionTypeList } from '@util/redux/actionType'

export const actionType = generateActionTypeList('auth', { actionType: [
  'LOGIN_SUCCESSFULLY',
  'LOGOUT',
]})
