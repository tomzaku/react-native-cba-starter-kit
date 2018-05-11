import { normalize, schema } from 'normalizr';

import { reduxHelper } from 'AppUtil'
import { getLinkServer } from 'AppSetting';
import { getRule } from '../rule'
import { createListActionType } from '../actionType';
import { addSaga } from '../name';

const checkIfExist = (actionTypes) => {
  return (actionType, callBack) => {
    if (actionTypes[actionType]) {
      return callBack
    }
    return null;
  }
}

const actionFactory = (type, options ) => {
  // options will include: rules, group 
  // Depend on rule will render action
  const actionTypes = createListActionType(type, options)
  const callActionTypes = checkIfExist(actionTypes)

  const getInitialData = callActionTypes('UPDATE_ALL', () =>({
    type: addSaga(actionTypes.UPDATE_ALL)
  }))

  const getMoreData = callActionTypes('UPDATE_MORE', () => ({
    type: addSaga(actionTypes.UPDATE_MORE)
  }))

  const updateSingle = callActionTypes('UDPATE_SINGLE', (data) => ({
    type: addSaga(actionTypes.UPDATE_SINGLE),
    data
  }))

  const updateFetching = callActionTypes('UPDATE_FETCHING',(isFetching, message= 'Waiting') => {
    return {
      type: actionTypes.UPDATE_FETCHING,
      isFetching,
      message,
    }
  })

  const updateQuerySuccess = callActionTypes('UPDATE_QUERY_SUCCESS', (message) => {
    return {
      type: actionTypes.UPDATE_QUERY_SUCCESS,
      message,
    }
  })

  const hideAlert = callActionTypes('UPDATE_ALERT', () => {
    return {
      type: actionTypes.UPDATE_ALERT,
      showAlert: false,
    }
  })
  // Yo can call all 
  return {
    getInitialData,
    getMoreData,
    updateSingle,
    updateFetching,
    updateQuerySuccess,
    hideAlert,
  }
}
export default actionFactory