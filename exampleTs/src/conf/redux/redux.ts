
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { appReducer } from './reducer'

const composeEnhancers =
	typeof window === 'object' && (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		?	(<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
			})
		: compose
const enhancer = composeEnhancers(
  // other store enhancers if any
  applyMiddleware(
	// Add saga, debug...
	// LogRocket.reduxMiddleware(),
  ),
)
const preloadedState = {}

export const configureStore = (onComplete?: Function) => {
	const store = createStore(
		appReducer,
		preloadedState,
		enhancer,
	)
	const persistor = persistStore(store)

	return { store, persistor }
}
