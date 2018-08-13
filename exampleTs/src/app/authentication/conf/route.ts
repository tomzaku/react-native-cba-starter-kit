import { TScreensModule } from  '@app/index'
import { LoadingAuthenticationScreen } from '../screen/LoadingAuthentication.screen'
import { LoginScreen } from '../screen/Login.screen'
import { RegisterScreen } from '../screen/Register.screen'

export const route: TScreensModule = {
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
