import I18n from 'react-native-i18n'
const messages = require('./language._generate.json')

export const settingI18nLanguage = () => {
	I18n.fallbacks = true
	I18n.translations = require('./language._generate.json')
	I18n.defaultSeparator = '/'
	return I18n
}
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
export default I18n
