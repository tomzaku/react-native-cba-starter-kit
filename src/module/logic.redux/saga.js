import ActionTypes from './actionType'

const {
  CHANGE_SAND_BOX
} = ActionTypes;

function* doFunWithSaga(action) {
  try {

  } catch(err) {

  }
}

export default function* watchSandbox() {
  logger.debug('watchSandbox')
  yield all([
    takeEvery(CHANGE_SAND_BOX_SAGA, doFunWithSaga),
  ]);
}