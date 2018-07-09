import actionType from '../actionType'
import { initialState } from '../initialState'
import reducer from '../reducer'

describe('todos reducer', () => {
  it('should return the initial state', () => {
	expect(reducer(undefined, { type:'', payload: { tags: [''], title: '', completed: false, id: '1' } })).toEqual(
		initialState,
	)
  })
  it(`should handle ${actionType.ADD_TASK}`, () => {
	const sampleTest = {
		tags: [''],
		title: 'Test',
		completed: false,
		id: '1-test',
	}
	expect(
		reducer(undefined, {
		type: actionType.ADD_TASK,
		payload: sampleTest,
		}),
	).toEqual({
		...initialState,
		tasks: {
		...initialState.tasks,
		[sampleTest.id]: sampleTest,
		},
		tasksIndex: [
		...initialState.tasksIndex,
		sampleTest.id,
		],
	})
	})
})
