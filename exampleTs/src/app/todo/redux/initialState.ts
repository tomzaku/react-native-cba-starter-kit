import { from, ImmutableObject } from 'seamless-immutable'


export const initialState = from({
  tasks: {
	1: {
		id: '1',
		tags: ['1'],
		title: 'Play football',
		completed: false,
	},
	2: {
		id: '2',
		tags: ['1'],
		title: 'Play game',
		completed: false,
	},
	3: {
		id: '3',
		tags: ['2'],
		title: 'Working typescript',
		completed: false,
	},
	4: {
		id: '4',
		tags: ['2'],
		title: 'Working test for react',
		completed: false,
	},
	5: {
		id: '5',
		tags: ['2'],
		title: 'Handle styles',
		completed: false,
	},
  },
  tasksIndex: ['1', '2', '3', '4'],
  tags: {
	1: {
		id: '1',
		title: 'Home',
	},
	2: {
		id: '2',
		title: 'Work',
	},
  },
  tagsIndex: ['1', '2'],
})

export type TTasks = {
  [key: string]: TTask,
}
export type TTask = {
  tags: string[],
  title: string,
  completed: boolean,
  id: string,
}
export type TTag = {
  id: string,
  title: string,
}
export type TTags = {
  [id: string]: TTag,
}
export type TTodoState = ImmutableObject<
  {
	tasks: TTasks,
	tasksIndex: string[],
	tags: TTags,
	tagsIndex: string[],
  }
>
