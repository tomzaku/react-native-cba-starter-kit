import R from 'ramda'
import _ from 'lodash'

export const filterListSpecific = (dataSource, keySearch, getDeepData) => {
  return R.filter((item) => isItemTypeFilter(getDeepData(item), keySearch))(dataSource)
}


// Seach keyword in list/ array/ string
export const filterList = (dataSource, keySearch, { type }) => {
  return R.filter((item) => isItemTypeFilter(item[type], keySearch))(dataSource)
}

// Adding spacer for each values of properties
const getDataType = (item = '') => {
  const spacer = R.join(' ')
  if (_.isArray(item)) {
    return spacer(item)
  } else if (_.isString(item)) {
    return item
  } else if (_.isObject(item)) {
    const valuesArr = R.values(item)
    return spacer(valuesArr)
  }
  return ''
}

// Item can be array or object
const isItemTypeFilter = (item=[], keySearch) => {
  // Adding spacer for each values of properties
  let dataTypeString = getDataType(item)
  if (keySearch === '#') {
    return searchNumberSign(dataTypeString)
  } else {
    return isFindFirstLetter(keySearch, dataTypeString)
  }
}



const searchNumberSign = (dataType) => {
  const numberSign = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '#'];
  return R.any((item) => isFindFirstLetter(item, dataType))(numberSign)
  // return false;
}
const isFindFirstLetter = (key, item) => {
  const keyFoundIndex = R.indexOf(key.toLowerCase(), item.toLowerCase())

  // Catch the begin word
  // Only catch the key begin or after ' ' charactor
  return keyFoundIndex > -1 && (keyFoundIndex == 0 || item[keyFoundIndex-1] === ' ')
}