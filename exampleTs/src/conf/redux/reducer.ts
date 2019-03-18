import app from '@app/index'
import { combineReducers } from 'redux'
import { PERSIST_CONFIG } from './persist'
import { persistReducer } from 'redux-persist'

// Type definition
export type TRootState = ReturnType<typeof reducer>

const reducer =  combineReducers({
	...app.reducerRaw,
})

const makeRootReducer =  (state: any, action: any) => {
	const { type } = action
	switch (type) {
		case 'RS':
		case 'LOGOUT':
			// tslint:disable-next-line:no-parameter-reassignment
			state = undefined
			break
		default:
			break
	}
	return reducer(state, action)
}

export const createAppReducer =  persistReducer(PERSIST_CONFIG.storeConfig, makeRootReducer)
