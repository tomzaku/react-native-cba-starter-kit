import { createListActionType } from "@util/redux/actionType";

import type from './type.js'

const ACTION_TYPE = [
  'CHANGE_SAND_BOX',
]

export default createListActionType(type, { rule: ACTION_TYPE })
