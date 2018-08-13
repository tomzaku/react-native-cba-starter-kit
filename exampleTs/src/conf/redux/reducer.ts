import { TAuthenticationState } from '@app/authentication/redux/initialState'
import { getReduxModule } from '@app/helper'
import { TAppState } from '@app/setting/redux/initalState'
import { TTodoState } from '@app/todo/redux/initialState'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { PERSIST_CONFIG } from './persist'


const moduleReducer = getReduxModule('reducer')
console.log('>>>>moduleReducer', moduleReducer)
const reducer = combineReducers({
	...moduleReducer,
})

export type TRootState = {
	setting: TAppState,
	todo: TTodoState,
	authentication: TAuthenticationState,
}

const rootReducer = (state: any, action: any) => {
	const { type } = action
	switch (type) {
		case 'RS':
		case 'LOGOUT':
			// tslint:disable-next-line:no-parameter-reassignment
			state = undefined
			// return {}
			break
		default:
			break
	}
	return reducer(state, action)
}
export const appReducer = persistReducer(PERSIST_CONFIG.storeConfig, rootReducer)
