import ActionTypes from './actionType'

const {
  CHANGE_SAND_BOX,
  CHANGE_SAND_BOX_SAGA
} = ActionTypes;

function* doFunWithSaga(action) {
  try {

  } catch(err) {

  }
}

export default function* watchSandbox() {
  yield all([
    takeEvery(CHANGE_SAND_BOX_SAGA, doFunWithSaga),
  ]);
}