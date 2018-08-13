import { TScreensModule } from  '@app/index'
import { LoadingAuthenticationScreen } from '../screen/loadingAuthentication'
import { LoginScreen } from '../screen/login'
import { RegisterScreen } from '../screen/register'

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
