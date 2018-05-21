// Config Storage
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga.js';
import thunk from 'redux-thunk';

import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
applyMiddleware(sagaMiddleware, thunk),
// other store enhancers if any
);
const preloadedState = undefined
export default function configureStore(onComplete) {
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer
  );

  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
}
