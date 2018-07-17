// import React from 'react'
// import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
// import { AppIcon } from '@tpl/AppIcon/AppIcon'
// import { compose, pure } from 'recompose';
// import { isFunction } from '@util/type';
// type TTypeElement = 'arrow-back' | 'menu'
// export type TValueElement = TTypeElement | React.ComponentClass | Function | null

// const generateIcon = (name: string) => <AppIcon name={name} color={'white'} />

// const generateElement = (Value: TValueElement) => {
// 	if (Value === null || !Value) return <View/>
// 	if (Value === 'arrow-back') {
// 		return generateIcon('ios-arrow-back')
// 	}
// 	if (Value === 'menu') {
// 		return generateIcon('ios-menu')
// 	}
// 	if (isFunction(Value)) return Value()
// 	return <Value />
// }
// interface TElementPropsOut {
// 	value: TValueElement
// 	style: ViewStyle | TextStyle
// 	onPress: () => void
// }
// const ElementView = ({ value, style, onPress }: TElementPropsOut) => (
// 	<TouchableOpacity style={[{ flex: 1 }, style]} onPress={onPress}>
// 		{generateElement(value)}
// 	</TouchableOpacity>
// )

// export const Element = compose<TElementPropsOut, TElementPropsOut>(pure)(ElementView)
