import { compose, map, mergeAll } from 'ramda'
import { addPrefix } from './name'
import { getRule } from './rule'

const makeGetActionType = (nameModule: string, appName= '@@app') => {
  return (nameAction: string) => `${addPrefix(nameModule, appName)}/${nameAction.toUpperCase()}/`
}

interface IGenerateActionTypeOption<T>{
  actionType?: T[],
  groupName?: string,
  appName?: string,
}


const generateActionTypeList = <T extends string, U = { [K in T]: string}>
	(nameModule: string, options: IGenerateActionTypeOption<T>): U => {
		const { actionType, appName, groupName } = options
		const rules = getRule(actionType, groupName)
		const getActionType = makeGetActionType(nameModule, appName)
		return compose<typeof rules , any, U>(mergeAll, map((key: string) => ({ [key]: getActionType(key) })))(rules)
}

export {
  generateActionTypeList,
}
