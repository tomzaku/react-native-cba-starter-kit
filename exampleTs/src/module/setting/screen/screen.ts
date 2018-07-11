import { TScreensModule } from '@module/module'
import { SelectThemeScreen } from './SelectTheme.screen'
import { SettingScreen } from './Setting.screen'
import { SettingTabletScreen } from './Setting.tablet.screen'

export const screen: TScreensModule = {
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
