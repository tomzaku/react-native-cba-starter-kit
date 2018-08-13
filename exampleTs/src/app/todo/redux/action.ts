import actionType from './actionType'
import { TTag, TTask } from './initialState'

export interface ITodoAction<T> {
  type: string,
  payload: T
}

export const updateTask = (id: string, taskUpdated: TTask) => {
  return {
	payload: taskUpdated,
	type: actionType.UPDATE_TASK,
  }
}

export const addTask = (task: TTask) => {
  return {
		type: actionType.ADD_TASK,
		payload: task,
  }
}

export const addTag = (tag: TTag) => {
  return {
		type: actionType.ADD_TAG,
		payload: tag,
  }
}

export const deleteTask = (id: string) => {
  return {
		type: actionType.DELETE_TASK,
		payload: {
		id,
		},
  }
}
