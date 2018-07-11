import { TScreensModule } from '@module/module'
import { LoginScreen } from './Login.screen'
import { RegisterScreen } from './Register.screen'

export const screen: TScreensModule = {
	Login: {
		phone: {
			screen: LoginScreen,
			navigationOptions: {
				title: 'Login',
			},
		},
	},
	Register: {
		phone: {
			screen: RegisterScreen,
			navigationOptions: {
				title: 'RegisterScreen',
			},
		},
	},
}
