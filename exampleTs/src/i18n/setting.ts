import I18n from 'react-native-i18n'
export const settingI18nLanguage = () => {
	I18n.fallbacks = true
	I18n.translations = require('./i18n.__generate__.json')
	I18n.defaultSeparator = '/'
	return I18n
}
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
export default I18n
