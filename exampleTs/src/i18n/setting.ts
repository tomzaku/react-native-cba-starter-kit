import I18n from 'react-native-i18n'
const messages = require('./language.build.json')

export const settingI18nLanguage = () => {
	I18n.fallbacks = true
	// English language is the main language for fall back:
	// I18n.translations = {
	//   en: require('./languages/english.json'),
	//   vi: require('./languages/vi.json'),
	// }
	console.log('>messages', messages)
	I18n.translations = require('./language.build.json')
	I18n.defaultSeparator = '/'
	// const languageCode = I18n.locale.substr(0, 2)
	return I18n
}
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
export default I18n
