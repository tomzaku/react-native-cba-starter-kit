import { TScreensModule } from '@app/index'
import { SelectThemeScreen } from '../screen/selectTheme'
import { SettingScreen } from '../screen/setting'
import { SettingTabletScreen } from '../screen/setting.table'

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
