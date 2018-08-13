import { TodoScreen } from '../screen/Todo.screen'
import { TodoSingleScreen } from '../screen/TodoSingle.screen'

export const route = {
	Todo: {
		phone: {
			screen: TodoScreen,
			navigationOptions: {
				title: 'Todo',
				titleI18n: 'Todo.todo',
				tabBarIconName: 'ios-checkbox',
			},
		},
	},
	TodoSingle: {
		phone: {
			screen: TodoSingleScreen,
			navigationOptions: {
				title: 'Detail Todo',
				titleI18n: 'TodoSingle.detail',
			},
		},
	},
}
