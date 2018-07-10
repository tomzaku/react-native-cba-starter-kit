import { TScreensModule } from '@module/module'
import { TodoScreen } from './Todo.screen'
export const screen: TScreensModule = {
	Todo: {
		screen: TodoScreen,
		navigationOptions: {
			title: 'Todo',
			tabBarIconName: 'ios-checkbox',
		},
	},
}
