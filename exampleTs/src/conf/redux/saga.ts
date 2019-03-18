import app from '@app/index'
import { all } from 'redux-saga/effects'

export function* appSaga() {
	yield all([
		...app.saga,
	])
}
