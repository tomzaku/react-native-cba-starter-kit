import { createListActionType } from "@util/redux/actionType";

const ACTION_TYPE = [
  'SWITCH_THEME',
  'CHANGE_LANGUAGE',
]

export default createListActionType('APP', { rule: ACTION_TYPE })
