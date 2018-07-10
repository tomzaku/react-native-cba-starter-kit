import { compose, filter, flatten, isNil, map, mapObjIndexed, mergeAll, path, pick, values } from 'ramda'
// tslint:disable-next-line:no-duplicate-imports

import { TScreenLayoutModule, TScreensModule } from '@module/module'
import { module } from '../module'

interface IOptionType {
  type: 'array' | 'flatten' | 'list'
}
interface IReduxType {
  reducer?: Function,
  saga?: Function,
  thunk?: Function
}
interface IScreen {
  [key: string]: any,
}
interface IPageListType {
  [key: string]: IScreen
}
interface IModuleType {
  redux?: IReduxType,
  page?: IPageListType
}

type ReduxKey = 'reducer' | 'action' | 'saga'


function pathDict(data: typeof module, rootPath: string[], options: IOptionType = { type: 'list' }) {
  const { type } = options
  const getListData = mapObjIndexed((eachModuleValue: IModuleType) => path(rootPath)(eachModuleValue))
  const removeUndefinedItem = filter((item: any) => !isNil(item))
  const listCompose = compose(removeUndefinedItem, getListData)
  switch (type) {
	case 'array': return compose(flatten, values, listCompose)(data)
	case 'flatten': return compose(mergeAll, values, listCompose)(data)
	case 'list':
	default: return listCompose(data)
  }
}


export const getSpecificModuleRedux = (key: ReduxKey, options?: IOptionType) => pathDict(module, ['redux', key], options)
export const getScreenList = () => <TScreensModule>pathDict(module, ['screen'], { type: 'flatten' })
export default { getSpecificModuleRedux, getScreenList }

