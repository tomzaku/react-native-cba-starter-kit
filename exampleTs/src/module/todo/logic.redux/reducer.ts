import * as Immutable from 'seamless-immutable'
import { ITodoAction } from './action'
import actionType from './actionType'
import { initialState, TTask, TTodoState } from './initialState'


const reducer = (state: TTodoState = initialState, action: ITodoAction<TTask>) => {
  switch (action.type) {
	case actionType.UPDATE_TASK: {
		return state.setIn(['tasks', action.payload.id], action.payload)
	}
	case actionType.ADD_TASK: {
		const tasksMerged = Immutable({ [action.payload.id]: action.payload }).merge(state.tasks)
		return state.setIn(['tasks'], tasksMerged).setIn(['tasksIndex'], state.tasksIndex.concat(action.payload.id))
	}
	case actionType.DELETE_TASK: {
		const taskCurrentIndex = state.tasksIndex.findIndex(taskId => taskId === action.payload.id)
		const taskRemoved = Immutable(state.tasks).without(action.payload.id)
		return state.setIn(['tasks'], taskRemoved).setIn(['tasksIndex'], state.tasksIndex.slice(0, taskCurrentIndex).concat(state.tasksIndex.slice(taskCurrentIndex + 1)))
	}
	case actionType.ADD_TAG: {
		const tagsMerged = Immutable({ [action.payload.id]: action.payload }).merge(state.tags)
		return state.setIn(['tags'], tagsMerged).setIn(['tagsIndex'], state.tagsIndex.concat(action.payload.id))

	}
	default: return state
  }
}

export default reducer
