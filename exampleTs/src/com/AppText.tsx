import React from 'react'
import { Text, TextProps } from 'react-native'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'

import { TRootState } from '@conf/redux/reducer'
import { EnhanceI18n } from '@i18n/index'
interface IAppTextPropsOut extends TextProps{
	text: string
}
interface IAppTextPropsIn extends IAppTextPropsOut{
	lang: string
}

const EnhanceText = ({ lang, text, ...rest }: IAppTextPropsIn) => {
	return  (
	<Text {...rest} >
		{EnhanceI18n.t(text, { locale: lang })}
	</Text>
	)
}

const mapStateToProps = (state: TRootState) => ({
	lang: state.setting.lang,
})
const withRedux = connect(mapStateToProps)

export const AppText = compose<IAppTextPropsIn, IAppTextPropsOut>(withRedux, pure)(EnhanceText)
