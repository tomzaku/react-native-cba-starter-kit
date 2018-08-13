import { route } from './conf/route'
import * as action from './redux/action'
import reducer from './redux/reducer'
import { redux } from './redux/redux'

export default {
	// Config
	route,

	// Redux
	reducer,
	action,
}
