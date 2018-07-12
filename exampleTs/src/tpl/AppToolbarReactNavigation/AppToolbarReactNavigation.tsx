import React from 'react'
import { withProps, compose } from "recompose"
import { View } from 'react-native';
import { AppToolbar } from '@tpl/AppToobar/AppToobar';



const createProps = withProps(
	({ index, scene, navigation }) => {
		const { descriptor } = scene
		const { headerLeft, headerRight, title } = descriptor.options
		return {
			leftElement: headerLeft || (index > 0 ? 'arrow-back' : undefined),
			rightElement: headerRight,
			onLeftElementPress: () => { navigation.pop() },
			centerElement: title,
		}
	},
)

export const AppToolbarReactNavigation = compose(createProps)(AppToolbar)
