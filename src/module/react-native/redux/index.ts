import action from './action'
import actionType from './actionType'
import conf from '../conf/redux'
import reducer from './reducer'
import reduxUtil from 'redux-packaged'
import selector from './selector'


const make = reduxUtil.make({
	makeActionType: actionType.make,
	makeAction: action.make,
	makeReducer: reducer.make,
	makeSelector: selector.make,
})

export {
	make,
}

export default make(conf)
