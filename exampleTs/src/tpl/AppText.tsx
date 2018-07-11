import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'

import { settingI18n } from '@conf/i18n/i18n'
import { TRootState } from '@conf/redux/reducer'
import { EnhanceI18n } from '@i18n/index'
interface IAppTextPropsOut {
	text: string
}
interface IAppTextPropsIn extends IAppTextPropsOut{
	lang: string
}

const EnhanceText = ({ lang, text, ...rest }: IAppTextPropsIn) => {
	console.log('>>> text', text)
	return  (
	<Text {...rest} >
		{EnhanceI18n.t(text, { locale: lang })}
	</Text>
)}

const mapStateToProps = (state: TRootState) => ({
	lang: state.setting.lang,
})
const withRedux = connect(mapStateToProps)
export const AppText = compose<IAppTextPropsIn, IAppTextPropsOut>(withRedux, pure)(EnhanceText)
