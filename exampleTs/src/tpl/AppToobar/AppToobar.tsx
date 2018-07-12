import React from 'react'
import { styles } from './AppToolbar.style'
import { pure, compose } from 'recompose'
import { withStyles } from '@theme/helper/context'
import { TValueElement, Element } from './Element'
import { View } from 'react-native';
import { AppText } from '@tpl/AppText';
import { isFunction } from '../../util/type'

type TCenterElement = string | React.ComponentClass | Function

export interface AppToolBarPropsOut {
	leftElement: TValueElement
	rightElement: TValueElement
	centerElement: TCenterElement
}
export interface AppToolBarPropIn extends AppToolBarPropsOut {
}
const renderCenter = (Value: TCenterElement, style) => {
	if (typeof Value === 'string') {
		return (
			<AppText text={Value} style={style} />
		)
	}
	if (typeof Value === 'function') return Value()
	return <Value />
}
const AppToolBarView = ({ styles, leftElement, onLeftElementPress, rightElement, centerElement, onRightElementPress }: AppToolBarPropsOut) =>{
	return (
		<View style={styles.container}>
			<Element value={leftElement} style={{ paddingLeft: 8  }} onPress={onLeftElementPress} />
			{renderCenter(centerElement, styles.titleText)}
			<Element value={rightElement} style={{ paddingRight: 8  }} onPress={onRightElementPress} />
		</View>
	)
}
export const AppToolbar = compose<AppToolBarPropIn, AppToolBarPropsOut>(withStyles(styles), pure)(AppToolBarView)
