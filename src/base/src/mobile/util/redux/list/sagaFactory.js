import { call, put, takeEvery, select, all } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';
import { v1 as uuid } from 'uuid'

import { createListActionType } from "../actionType";

// ─── NORMALIZING DATA ───────────────────────────────────────────────────────────
const getObjectSchema = (options = {}) => {
  console.log('DATA OPTIONS', options)
  return new schema.Entity('data', {}, {
    idAttribute: 'id',
    ...options
  })
}

const normalizeData = (data, options = {}) => {
  return normalize(data, [getObjectSchema(options.schemaOptions)])
}
// ────────────────────────────────────────────────────────────────────────────────

function* handleRESTFUL(fetching, fetchServer, updateDataLocal, updateSuccess, updateFailure) {
  try {
    // Update data local
    console.log('SAGA BEGIN')

    yield put(fetching())

    // Check typeof fetchServer
    if(!fetchServer || typeof fetchServer !== 'function') {
      throw 'fetchServer is not a function or null'
    }

    const data = yield call(fetchServer)

    console.log('DATA RECEIVE', data)

    // TODO: 
    // Check status of data is failure or success

    const ok = data
    if (ok) {
      yield put(updateDataLocal(data))
      yield put(updateSuccess())
    } else {
      yield put(updateFailure())
    }
    return data;
  } catch (err) {
    console.log('Let\'s check function handleRESTFUL', err)
    yield put(updateFailure(err))
  }
}

const makeFetchGeneral = (type) => {
  const actionType = createListActionType(type)
  return function (fetchServer, updateDataLocal) {
    const fetching = () => ({
      type: actionType.UPDATE_FETCHING,
      isFetching: true,
      message: 'Getting data'
    })
    const updateSuccess = () => ({
      type: actionType.UPDATE_RESPONSE_STATUS,
      ok: true,
      message: 'Fetched data successful'
    })
    const updateFailure = () => ({
      type: actionType.UPDATE_RESPONSE_STATUS,
      ok: false,
      message: 'Failure when fetching datazt'
    })
    return function* () {
      yield handleRESTFUL(fetching, fetchServer, updateDataLocal, updateSuccess, updateFailure)
    }
  }
}

const successAction = (type, message) => ({
  type,
  isFetching: false,
  ok: true,
  message: message || 'Update done'
})

const failureAction = (type, message) => ({
  type,
  isFetching: false,
  ok: false,
  message: message || 'Update done'
})

function* removeMoreData(actions, type, options = {}) {
  const { idList = [] } = actions;
  const { removeMore } = options;

  const actionTypes = createListActionType(type)
  // const { schemaOptions= {} } = options;
  // const { idAttribute = 'id' } = schemaOptions;

  // Update local
  yield put ({
    type: actionTypes.REMOVE_MORE_LOCAL,
    idList,
  })
  const removeMoreData = (data = []) => ({
    type: actionTypes.REMOVE_MORE_SERVER,
    idList,
  })
  // Update online
  const fetchGeneral = makeFetchGeneral(type)
  yield fetchGeneral(() => removeMore(idList), removeMoreData)()
}
function* addMoreSaga(actions, type, options = {}) {
  const { data = [] } = actions;
  const { addMore } = options;
  
  const actionTypes = createListActionType(type)
  const { schemaOptions= {} } = options;
  const { idAttribute = 'id' } = schemaOptions;
  // Update local
  const dataWithLocal = data.map((item) => { item[idAttribute] = uuid() ; return item })
  idList = dataWithLocal.map(item => item[idAttribute])
  yield put ({
    type: actionTypes.ADD_MORE_LOCAL,
    data: normalizeData(dataWithLocal),
    local: idList,
  })
  const addMoreAction = (data = []) => ({
    type: actionTypes.ADD_MORE_SERVER,
    local: idList,
    data: normalizeData(data),
  })
  // Update online
  const fetchGeneral = makeFetchGeneral(type)
  yield fetchGeneral(() => addMore(data), addMoreAction)()
}

const sagaFactory = (type, options) => {
  const sagaActionTypes = createListActionType(type, { isSaga: true })
  const actionTypes = createListActionType(type)

  const updateAllAction = (data) => ({
    type: actionTypes.GET_ALL,
    data: normalizeData(data, options), 
  })

  const updateMoreAction = (data) => ({
    type: actionTypes.GET_MORE,
    data: normalizeData(data, options),
  })

  const { getAll, getMore, updateSingle } = options;
  
  const fetchGeneral = makeFetchGeneral(type)
  const watch = Object.keys(sagaActionTypes).map(actionType => {
    // Check key is same as GET_ALL
    switch(actionType) {
      case 'GET_ALL':
        return takeEvery(sagaActionTypes.GET_ALL, fetchGeneral(getAll, updateAllAction))
        // return takeEvery(sagaActionTypes.GET_ALL, test)
      case 'GET_MORE': 
        return takeEvery(sagaActionTypes.GET_MORE, fetchGeneral(getMore, updateMoreAction))
      case 'REMOVE_MORE': 
        return takeEvery(sagaActionTypes.REMOVE_MORE, function* (actions) {
          yield removeMoreData(actions, type, options)
        })
      case 'ADD_MORE':
        return takeEvery(sagaActionTypes.ADD_MORE, function* (actions) {
          yield addMoreSaga(actions, type, options)
        })
    }
  })
  console.log('WATCH', watch)
  return function* () {
    yield all(watch)
  }
}
function* test() {
  console.log('TESTCLEAN_APP')
  yield put({
    type: 'CLEAN_APP'
  })
}
export default sagaFactory