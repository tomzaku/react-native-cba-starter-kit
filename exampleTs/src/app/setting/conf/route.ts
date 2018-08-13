import { TScreensModule } from '@app/index'
import { SelectThemeScreen } from '../screen/SelectTheme.screen'
import { SettingScreen } from '../screen/Setting.screen'
import { SettingTabletScreen } from '../screen/Setting.tablet.screen'

export const route: TScreensModule = {
	Setting: {
		phone: {
			screen: SettingScreen,
			navigationOptions: {
				title: 'Setting',
				titleI18n: 'Setting.setting',
				tabBarIconName: 'ios-cog',
			},
		},
		tablet: {
			screen: SettingTabletScreen,
		},
	},
	SelectTheme: {
		phone: {
			screen: SelectThemeScreen,
			navigationOptions: {
				title: 'Theme',
			},
		},
	},
}
