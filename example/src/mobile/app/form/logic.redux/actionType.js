import { createListActionType } from "@util/redux/actionType";

const type = 'sandbox'

const ACTION_TYPE = [
  'CHANGE_FORM',
]

export default createListActionType(type, { rule: ACTION_TYPE })
