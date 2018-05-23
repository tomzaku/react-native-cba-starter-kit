import { createListActionType } from "@util/redux/actionType";
import type from './type.js'

const ACTION_TYPE = [
  'LOGIN_SUCCESSFUL',
  'LOGOUT',
]

export default createListActionType(type, { rule: ACTION_TYPE })
