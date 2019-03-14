import counting from './counting'
import sample from './sample'
import authentication from './authentication'
import reduxUtil from 'redux-packaged'
import * as moduleUtil from '@app/util'

const app = {
	counting,
	sample,
	authentication,
}

const appModule = moduleUtil.combine(app)
const reducer = reduxUtil.reducer.get(appModule.redux)
const reducerRaw = reduxUtil.reducer.getRaw(appModule.redux)
const saga = reduxUtil.saga.get(appModule.redux) as any

export default {
	...appModule,
	reducer,
	saga,
	reducerRaw,
}
