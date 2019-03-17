import React from 'react'
import { View } from 'react-native'
import AppRouter from '@router/router'
import { createStructuredSelector } from 'reselect'
import settingRedux from '@app/setting/redux'
import { connect } from 'react-redux'
import i18n from './i18n'
import { SettingIntialState } from '@app/setting/redux/reducer';
import { ThemeProvider } from 'react-native-elements';
import * as theme from '@theme/index'

type StorageProps = {
    languageTag: SettingIntialState['languageTag'],
    themeMode: SettingIntialState['themeMode']
}
type Props = StorageProps & {}

const Context = (props: Props) => {
    i18n.locale = props.languageTag
    return (
        <ThemeProvider theme={props.themeMode === 'light' && theme.light || theme.dark}>
            <AppRouter />
        </ThemeProvider>
    )
}

const mapStateToProps = createStructuredSelector({
    languageTag: settingRedux.selector.getLanguageTag,
    themeMode: settingRedux.selector.getThemeMode,

})

export default connect(mapStateToProps)(Context)