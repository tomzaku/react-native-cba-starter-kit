import { TScreensModule } from  '@app/index'
import { CalendarScreen } from './Calendar.screen'

export const screen: TScreensModule = {
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
