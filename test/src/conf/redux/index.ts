import * as R from 'ramda'
import createSagaMiddleware from 'redux-saga'
import { appSaga } from './saga'
import { createAppReducer, TRootState } from './reducer'
import { persistStore } from 'redux-persist'

import {
	AnyAction,
	applyMiddleware,
	compose,
	createStore,
} from 'redux'


// HANDLE HUGE DATA---------
// Can use regrex to catch data

const typeNotSubscribeInDebug = [
	'@@app/PATIENTDRILLDOWN/ADD_MORE',
	'@@app/MAIN/SAVE_STORAGE',
]

const actionSanitizer = (action: AnyAction) => (
	R.findIndex(R.equals(action.type), typeNotSubscribeInDebug) > -1 && action.payload.data ?
	{ ...action, payload: { data:  '<<LONG_BLOB>>' } } : action
)

const stateSanitizer = (state: TRootState) => state
// --------------------------

const composeEnhancers =
	typeof window === 'object' && (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		?	(<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				actionSanitizer,
				stateSanitizer,
				serialize: true,
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
			})
		: compose

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  // other store enhancers if any
  applyMiddleware(
	// Add saga, debug...
	// LogRocket.reduxMiddleware(),
	sagaMiddleware,
  ),
)

const preloadedState = {}

function configureStore(onComplete?: Function) {
	const store = createStore(
	  createAppReducer,
	  preloadedState,
	  enhancer,
	)
	const persistor = persistStore(store)
	sagaMiddleware.run(appSaga)
	return { store, persistor }
}

export default configureStore
