import { TScreensModule } from  '@app/index'
import { TodoScreen } from './Todo.screen'
import { TodoSingleScreen } from './TodoSingle.screen'

export const screen: TScreensModule = {
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
