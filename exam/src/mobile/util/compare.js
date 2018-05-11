import _ from 'lodash'

export const isEqualObjectIncludeFunction = (first, second) => {
  return _.isEqualWith(first, second, (val1, val2) => {
    // Compare include function
    if (_.isFunction(val1) && _.isFunction(val2)) {
      return val1.toString() === val2.toString();
    }
  })
}