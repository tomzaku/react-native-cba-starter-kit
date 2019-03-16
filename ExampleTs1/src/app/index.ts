import counting from './counting'
import sample from './sample'
import authentication from './authentication'
import profile from './profile'
import setting from './setting'

import reduxUtil from 'redux-packaged'
import * as moduleUtil from '@app/util'

const app = {
	counting,
	sample,
	authentication,
	profile,
	setting,
}

const appModule = moduleUtil.combine(app)
const reducer = reduxUtil.reducer.get(appModule.redux)
const reducerRaw = reduxUtil.reducer.getRaw(appModule.redux)
const saga = reduxUtil.saga.get(appModule.redux)

export default {
	...appModule,
	reducer,
	saga,
	reducerRaw,
}
