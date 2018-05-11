import R from 'ramda'
import _ from 'lodash'
import Immutable from 'seamless-immutable'
import logger from 'react-consola'

import { getPrefix, getActionTypeByModule } from '../name'
import { getRule } from '../rule';
import { createListActionType } from '../actionType';
import { createInitialState } from './initialState';
// import log from 'consola'

const mergeObject = (obj1, obj2) => {
  return Immutable.merge(obj1, obj2)
}
const mergeArray = (arr1, arr2) => {
  return arr1.concat(arr2)
}
const isTheSameDataResponse = (data1, data2) =>{
  return R.equals(data1, data2)
}
const reducerFactory = (type, options = {}) => {
  const { initialState, reducer, rule, group='FULL' } = options;
  const initialStateGenerate = initialState ? initialState : createInitialState()
  const actionType = createListActionType(type, { group, rule })

  logger.info('>>> REGISTERING REDUCER: ', actionType)

  return function(state = initialStateGenerate, action) {
    switch(action.type) {
      case actionType.UPDATE_ALL : {
        if (isTheSameDataResponse(action.data.entities, state.entities)) return state
        return state.merge(action.data)
      }
      case actionType.UPDATE_MORE : {
        // return Immutable.merge(state, action.data, {deep: true})
        // return state.merge( action.data, {deep: true})
        return state.updateIn(['entities', 'data'], mergeObject, action.data.entities.data).updateIn(['result'], mergeArray, action.data.result )
      }
      case actionType.UDPATE_SINGLE : {
        return state.updateIn(['entities', 'data', action._id], action.data)
      }
      case actionType.UPDATE_FETCHING : {
        return state.set('isFetching', action.isFetching).set('message', action.message).set('showAlert', true)
      }
      case actionType.UPDATE_RESPONSE_STATUS : {
        return state.set('isFetching', false).set('message', action.message).set('showAlert', true).set('ok', action.ok)
      }
      // case actionType.UPDATE_QUERY_SUCCESS : {
      //   return state.set('isFetching', false).set('message', action.message).set('showAlert', true)
      // }
      case actionType.UPDATE_ALERT : {
        return state.set('showAlert', action.showAlert)
      }
    }

    // For specific usecase module
    if (reducer) return reducer(state, action)
    return state;
  }
}

export default reducerFactory;
