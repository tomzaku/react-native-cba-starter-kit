import { TScreensModule } from  '@app/index'
import { CalendarScreen } from '../screen/Calendar.screen'

export const route: TScreensModule = {
	Calendar: {
		phone: {
			screen: CalendarScreen,
			navigationOptions: {
				title: 'Calendar',
				titleI18n: 'Calendar.title',
			},
		},
	},
}
