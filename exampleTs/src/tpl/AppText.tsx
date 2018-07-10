import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'

import { TRootState } from '@conf/redux/reducer'
import { EnhanceI18n } from '@i18n/index'

interface IAppTextPropsOut {
}
interface IAppTextPropsIn extends IAppTextPropsOut{
	lang: string
}

const EnhanceText = ({ lang }: IAppTextPropsIn) => (
	<Text>
		{EnhanceI18n.t('signIn', { locale: lang })}
	</Text>
)

const mapStateToProps = (state: TRootState) => ({
	lang: state.setting.lang,
})
const withRedux = connect(mapStateToProps)
export const AppText = compose<IAppTextPropsIn, IAppTextPropsOut>(withRedux, pure)(EnhanceText)
