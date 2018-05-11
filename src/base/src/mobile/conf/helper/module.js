import R from 'ramda'

import modules from '../../app/'

const getPathRedux = (middlewareKey) => R.path(['redux', middlewareKey])
const getPathScreen = (middlewareKey) => R.path(['screen'])

export const pickListData = (data, path, middlewareKey, options = {}) => {
  const { type } = options
  const getListData = R.map((val, key) => path(middlewareKey, key)(val))
  const removeUndefinedItem = R.filter((item) => item)
  
  const listCompose = R.compose(removeUndefinedItem, getListData)
  switch (type){
    case 'array': return R.compose(R.values, listCompose)(data)
    case 'flatten': return R.compose(R.mergeAll, R.values, listCompose)(data)
    default: return listCompose(data)
  }
}

const pickListDataCurry = R.curryN(3, pickListData)

export const getSpecificModuleRedux = pickListDataCurry(modules, getPathRedux) 
export const screenList = pickListDataCurry(modules, getPathScreen)(null, {type: 'flatten'})
export default { getSpecificModuleRedux, screenList }