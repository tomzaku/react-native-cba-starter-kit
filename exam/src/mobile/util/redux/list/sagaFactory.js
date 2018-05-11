import { call, put, takeEvery, select, all } from 'redux-saga/effects';
import logger from 'react-consola'
import { createListActionType } from "../actionType";
import { normalize, schema } from 'normalizr';

// ─── NORMALIZING DATA ───────────────────────────────────────────────────────────
const objectSchema = new schema.Entity('data', {}, {
  // photos: photoSchema,
  idAttribute: '_id'
})
const listSchema = [objectSchema]
const curryFunc = (schema, options) => {
  return function(data) {
    return normalize(data, schema, options)
  }
}
const normalizeDataFunc = curryFunc(listSchema)
// ────────────────────────────────────────────────────────────────────────────────

function* handleRESTFUL(fetching, fetchServer, updateDataLocal, updateSuccess, updateFailure) {
  try {
    // Update data local
    logger.debug('SAGA BEGIN')

    yield put(fetching())

    // Check typeof fetchServer
    if(!fetchServer || typeof fetchServer !== 'function') {
      throw 'fetchServer is not a function or null'
    }

    const data = yield call(fetchServer)

    logger.debug('DATA RECEIVE', data)
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
    logger.error('Let\'s check function handleRESTFUL', err)
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


const sagaFactory = (type, options) => {
  const sagaActionTypes = createListActionType(type, { isSaga: true })
  const actionTypes = createListActionType(type)

  const updateAllAction = (data) => ({
    type: actionTypes.UPDATE_ALL,
    data: normalizeDataFunc(data), 
  })

  const updateMoreAction = (data) => ({
    type: actionTypes.UPDATE_MORE,
    data: normalizeDataFunc(data),
  })

  const { getAll, getMore, updateSingle } = options;
  
  const fetchGeneral = makeFetchGeneral(type)
  const watch = Object.keys(sagaActionTypes).map(actionType => {
    // Check key is same as update_all
    switch(actionType) {
      case 'UPDATE_ALL':
        return takeEvery(sagaActionTypes.UPDATE_ALL, fetchGeneral(getAll, updateAllAction))
        // return takeEvery(sagaActionTypes.UPDATE_ALL, test)
      case 'UPDATE_MORE': 
        return takeEvery(sagaActionTypes.UPDATE_MORE, fetchGeneral(getMore, updateMoreAction))
    }
  })
  console.log('WATCH', watch)
  return function* () {
    yield all(watch)
  }
}
function* test() {
  logger.input('TESTCLEAN_APP')
  yield put({
    type: 'CLEAN_APP'
  })
}
export default sagaFactory