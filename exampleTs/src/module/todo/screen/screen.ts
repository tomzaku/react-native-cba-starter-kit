import { TScreensModule } from '@module/module'
import { TodoScreen } from './Todo.screen'
import { TodoSingleScreen } from './TodoSingle.screen'

export const screen: TScreensModule = {
	Todo: {
		phone: {
			screen: TodoScreen,
			navigationOptions: {
				title: 'Todo',
				tabBarIconName: 'ios-checkbox',
			},
		},
	},
	TodoSingle: {
		phone: {
			screen: TodoSingleScreen,
			navigationOptions: {
				title: 'Detail Todo',
			},
		},
	},
}
