import { withTheme } from '@theme/helper/context'
import React from 'react'
import { Header } from 'react-navigation'
import { compose, withProps } from 'recompose'
// Read this code and override style
// https://github.com/react-navigation/react-navigation/blob/608365266a11f4e48519ae010106c757a2bf13b7/src/views/Header/Header.js
const addProps = withProps(
	({ theme, scene }) => ({
		// options
	}),
)
export const AppHeader = compose(addProps, withTheme)(Header)
