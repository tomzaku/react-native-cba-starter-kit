/**
* @providesModule AppI18n
*/

import I18n from 'react-native-i18n'
// import I18n from './I18n'

const missingTranslationRegex = /^\[missing ".*" translation\]$/

// This function is a wrapper to avoid exception wich leads in a crash
const translateOrFallback = (initialMsg: string, options: any) => {
	const localMsg = I18n.t(initialMsg, options)
	// The translation does not exist, the default message is not very sexy
	// Instead we return the message we tried to translate
	if (missingTranslationRegex.test(localMsg)) {
		__DEV__ && console.log(`translation "${initialMsg}" does not exists in translations files`)
		return initialMsg
	}

  return localMsg
}

export const EnhanceI18n = {
  ...I18n,
  t: translateOrFallback,
}
