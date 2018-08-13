// import { WithStyles, withStyles } from '@theme/theme'
// import { AppText } from '@com/AppText'
// import React from 'react'
// import { View } from 'react-native'
// import { compose, pure } from 'recompose'
// import { styles } from './AppToolbar.style'
// import { Element, TValueElement } from './Element'

// type TCenterElement = string | React.ComponentClass<any> | Function

// export interface AppToolBarPropsOut {
// 	leftElement: TValueElement
// 	rightElement: TValueElement
// 	centerElement: TCenterElement
// }
// export interface AppToolBarPropIn extends AppToolBarPropsOut, WithStyles<typeof styles> {
// }
// const renderCenter = (Value: any, style: any) => {
// 	if (typeof Value === 'string') {
// 		return (
// 			<AppText text={Value} style={style} />
// 		)
// 	}
// 	if (typeof Value === 'function') return Value()
// 	return <Value />
// }
// const AppToolBarView = ({ styles, leftElement, onLeftElementPress,
// 	rightElement, centerElement, onRightElementPress }: AppToolBarPropIn) => {
// 	return (
// 		<View style={styles.container}>
// 			<Element value={leftElement} style={{ paddingLeft: 8  }} onPress={onLeftElementPress} />
// 			{renderCenter(centerElement, styles.titleText)}
// 			<Element value={rightElement} style={{ paddingRight: 8  }} onPress={onRightElementPress} />
// 		</View>
// 	)
// }
// export const AppToolbar = compose<AppToolBarPropIn, AppToolBarPropsOut>(withStyles(styles), pure)(AppToolBarView)
