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
const mergeArray = (arr1 = [], arr2) => {
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
      case actionType.GET_ALL : {
        if (isTheSameDataResponse(action.data.entities, state.entities)) return state
        return state.merge(action.data)
      }
      case actionType.GET_MORE : {
        return state.updateIn(['entities', 'data'], mergeObject, action.data.entities.data).updateIn(['result'], mergeArray, action.data.result )
      }
      
      case actionType.ADD_MORE: {
        // Add data(from local/ server)
        // Show status if local => update done
        return state.updateIn(['entities', 'data'], mergeObject, action.data.entites.data).updateIn(['result'], mergeArray, action.data.result )
      }
      case actionType.CHANGE_STATUS_UPDATE_FINISH: {

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
      // ─── ADD MORE DATA ───────────────────────────────────────────────
      case actionType.ADD_MORE_LOCAL: {
        return state.updateIn(['entities', 'data'], mergeObject, action.data.entities.data).updateIn(['local'], mergeArray, action.data.result)
      }
      case actionType.ADD_MORE_SERVER: {
        // This way only remove id of local
        return state.updateIn(['result'],mergeArray, state.local).set('local', [])
      }
      // ─── END OF ADD MORE DATA ────────────────────────────────────────
      // ─── REMOVE MORE DATA ───────────────────────────────────────────────
      case actionType.REMOVE_MORE_LOCAL: {
        const { idList } = action
        const removeData = R.pick(action.idList)(state.entities.data)
        const addHiddenData = R.map(item =>{const itemHidden = item.set('isHidden',true); return itemHidden} )(removeData)
        return state.setIn(['entities', 'data'], state.entities.data.merge(addHiddenData))
        
      }
      case actionType.REMOVE_MORE_SERVER: {
        // This way only remove id of local
        return state.updateIn(['result'],mergeArray, state.local).set('local', [])
      }
      // ─── END OF REMOVE MORE DATA ────────────────────────────────────────
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
