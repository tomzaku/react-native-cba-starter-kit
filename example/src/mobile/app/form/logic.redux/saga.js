import ActionTypes from './actionType'

const {
  CHANGE_FORM
} = ActionTypes;

function* doFunWithSaga(action) {
  try {

  } catch(err) {

  }
}

export default function* watchSandbox() {
  logger.debug('watchSandbox')
  yield all([
    takeEvery(CHANGE_FORM_SAGA, doFunWithSaga),
  ]);
}