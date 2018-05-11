import R from 'ramda'

import { addPrefix, addSaga } from "./name";
import { getRule } from "./rule";

export const makeGetActionTypeByModule = (nameModule, { nameApp = '@@app', isSaga }) => {
  return function(nameAction) {
    const result = `${addPrefix(nameModule, nameApp)}${nameAction.toUpperCase()}`
    if (isSaga) return addSaga(result)
    return result
  }
}

export const createListActionType = (nameModule, options={}) => { 
  const { rule, group, isSaga, nameApp } = options 
 
  const ruleByGroup = getRule({ rule, group }) 
  
  const getActionType = makeGetActionTypeByModule(nameModule, { isSaga, nameApp }) 
  // Return object that contain getActionType, R.mergeAll: using for flatten Array to Object 
  return R.compose(R.mergeAll, R.map((key)=> { return {[key]: getActionType(key)}}))(ruleByGroup) 
} 

export default {
  makeGetActionTypeByModule,
  createListActionType,
}