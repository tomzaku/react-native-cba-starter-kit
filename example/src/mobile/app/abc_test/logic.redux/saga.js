import ActionTypes from './actionType'

const {
  CHANGE_ABC_TEST
} = ActionTypes;

function* doFunWithSaga(action) {
  try {

  } catch(err) {

  }
}

export default function* watchSandbox() {
  logger.debug('watchSandbox')
  yield all([
    takeEvery(CHANGE_ABC_TEST_SAGA, doFunWithSaga),
  ]);
}