import React from 'react'
import { View } from 'react-native'
import AppRouter from '@router/router'
import { createStructuredSelector } from 'reselect'
import settingRedux from '@app/setting/redux'
import { connect } from 'react-redux'
import i18n from './i18n'
import { SettingIntialState } from '@app/setting/redux/reducer';

type StorageProps = {
    languageTag: SettingIntialState['languageTag']
}
type Props = StorageProps & {}

const Context = (props: Props) => {
    i18n.locale = props.languageTag
    return (
        <View style={{flex: 1}}>
            <AppRouter />
        </View>
    )
}

const mapStateToProps = createStructuredSelector({
    languageTag: settingRedux.selector.getLanguageTag
})

export default connect(mapStateToProps)(Context)