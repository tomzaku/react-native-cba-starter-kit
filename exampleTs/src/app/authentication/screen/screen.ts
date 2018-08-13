import { TScreensModule } from  '@app/index'
import { LoadingAuthenticationScreen } from './LoadingAuthentication.screen'
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
	LoadingAuthentication: {
		phone: {
			screen: LoadingAuthenticationScreen,
		},
	},
}
