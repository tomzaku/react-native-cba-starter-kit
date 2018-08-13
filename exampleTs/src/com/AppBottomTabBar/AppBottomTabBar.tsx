import { withTheme } from '@theme/theme'
import React from 'react'
import { BottomTabBar } from 'react-navigation-tabs'
import { compose, withProps } from 'recompose'
// Read this
// https://github.com/react-navigation/react-navigation-tabs/blob/master/src/views/BottomTabBar.js

const createProps = withProps(
	({ theme, activeTintColor, inactiveTintColor, tabStyle, ...restProps }) => {
		return {
			activeTintColor: activeTintColor || theme.palette.tabbarNavigation.activeLabel,
			inactiveTintColor: inactiveTintColor || theme.palette.tabbarNavigation.inactiveLabel,
			tabStyle: tabStyle || theme.appStyle.tabbarNavigation.main,
		}
	},
)
export const AppBottomTabBar = compose(withTheme, createProps)(BottomTabBar)
