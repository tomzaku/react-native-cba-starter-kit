import * as RNLocalize from "react-native-localize";
import i18n from 'i18n-js';

import en from './locales.__generate__/en.json'
import de from './locales.__generate__/de.json'

i18n.defaultLocale = 'en';
i18n.locale = RNLocalize.getLocales()[0].languageTag;
i18n.fallbacks = true;
i18n.translations = { en, de };

export default i18n;