// import alexa from '../../module/alexa/logic/redux/reducer';
import { getSpecificModuleRedux } from '../helper/module'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { REHYDRATE, PURGE, persistCombineReducers, persistReducer } from 'redux-persist'
import reduxPersist from './ReduxPersist';

const rootModule = getSpecificModuleRedux('reducer')

const reducer = combineReducers({
  ...rootModule,
  form: formReducer,
})

const rootReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'RS':
    case 'LOGOUT':
      state = undefined
        // state = {
        //   // Keep store when logout
        //   alexa: state.alexa
        // };
      break;
    // case 'REHYDRATE':
    //   return { ...state, ...action.payload, rehidrate: true };
    default:
      break;
  }
  return reducer(state, action);
};

const persistConfig = reduxPersist.storeConfig
const appReducer = persistReducer(persistConfig, rootReducer)

export default appReducer;
