import { TScreensModule } from '@module/module'
import { LoadingStartupScreen } from './LoadingStartup.screen'

export const screen: TScreensModule = {
	LoadingStartup: {
		phone: {
			screen: LoadingStartupScreen,
		},
	},
}
