import { compose, filter, flatten, isNil, map, mapObjIndexed, mergeAll, path, pick, values } from 'ramda'
// tslint:disable-next-line:no-duplicate-imports

import { TScreenLayoutModule, TScreensModule } from  '@app/index'
import app, { ReduxKey, TModule } from '../index'

interface IOptionType {
  type: 'array' | 'flatten' | 'list'
}



function pathDict(data: typeof app, rootPath: string[], options: IOptionType = { type: 'list' }) {
  const { type } = options
  const getListData = mapObjIndexed((eachModuleValue: TModule) => path(rootPath)(eachModuleValue))
  const removeUndefinedItem = filter((item: any) => !isNil(item))
  const listCompose = compose(removeUndefinedItem, getListData)
  switch (type) {
	case 'array': return compose(flatten, values, listCompose)(data)
	case 'flatten': return compose(mergeAll, values, listCompose)(data)
	case 'list':
	default: return listCompose(data)
  }
}


export const getSpecificModuleRedux = (key: ReduxKey, options?: IOptionType) => pathDict(app, ['redux', key], options)
export const getScreenList = () => <TScreensModule>pathDict(app, ['screen'], { type: 'flatten' })
export default { getSpecificModuleRedux, getScreenList }

