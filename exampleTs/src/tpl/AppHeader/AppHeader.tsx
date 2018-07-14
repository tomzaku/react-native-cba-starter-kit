import { withTheme } from '@theme/helper/context'
import { path } from 'ramda'
import React from 'react'
import { Header } from 'react-navigation'
import { compose, mapProps, renameProp, withProps } from 'recompose'
import { from } from 'seamless-immutable'
// Read this code and override style
// https://github.com/react-navigation/react-navigation/blob/608365266a11f4e48519ae010106c757a2bf13b7/src/views/Header/Header.js

const addProps = withProps(
	({ theme, scene, scenes, index }) => {
		console.log('>>>>', scene, scenes)
		const headerTitleStylePath = ['descriptor', 'options', 'headerTitleStyle']
		const headerStylePath = ['descriptor', 'options', 'headerStyle']
		const headerTintColorPath = ['descriptor', 'options', 'headerTintColor']
		// const headerTintColorPath = ['descriptor', 'options', 'headerTintColor']
		const headerTitleStyle = path(headerTitleStylePath)(scene) || theme.appStyle.toolbar.text
		const headerTintColor = path(headerTintColorPath)(scene) || theme.palette.toolbar.contrastText
		// const headerTintColor = path(headerTintColorPath)(scene) || theme.palette.toolbar.contrastText
		const headerStyle = path(headerStylePath)(scene) || theme.appStyle.toolbar.main
		// const headerTintColor = path(headerTitleStylePath)(scene) || theme.palette.appStyle.text
		const newScene = from(scene).setIn(headerTitleStylePath, headerTitleStyle)
									.setIn(headerStylePath, headerStyle)
									// .setIn(headerTintColorPath, headerTintColor)
									.setIn(headerTintColorPath, headerTintColor)
		// >>>>>>>>>>>>>>>>>>>>
		// For android
		// I don't know why error come from
		// I wonder why react-navigation also have 2: scene, scenes
		// So I will override both
		const sceneInScenes = path([index])(scenes)
		const newsceneInScenes = from(sceneInScenes).setIn(headerTitleStylePath, headerTitleStyle)
		.setIn(headerStylePath, headerStyle)
		.setIn(headerTintColorPath, headerTintColor)
		// <<<<<<<<<<<<
		const newScenes = from(scenes).set(index, newsceneInScenes)
		return {
			// scene: newScene,
			scenes: newScenes,
		}
	},
)

export const AppHeader = compose(
	withTheme,
	addProps,
)(Header)
// export const AppHeader = Header
