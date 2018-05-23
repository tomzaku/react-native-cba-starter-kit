import { all } from 'redux-saga/effects';
import R from 'ramda'
import { getSpecificModuleRedux } from '../helper/module';

// import modules from './registerModule'
// import watchAlexa from '../../module/alexa/logic/redux/saga';

// const removeEmptyItem = R.filter((item) => item)
// const getSaga = R.compose(removeEmptyItem,)

export default function* rootSaga() {
  const sagaModules = getSpecificModuleRedux('saga', { type: 'array' })
  const callSagaModules = sagaModules.map(saga => saga())
  yield all(callSagaModules);
}
