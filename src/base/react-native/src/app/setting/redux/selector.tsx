import { SelectorPath } from 'redux-packaged'

export type SettingSelector = ReturnType<typeof make>

const make = (local: string[], getAbsolutePath: SelectorPath) => ({
    getLanguageTag: getAbsolutePath(['languageTag']),
    getThemeMode: getAbsolutePath(['themeMode'])
})

export default {
    make
}
