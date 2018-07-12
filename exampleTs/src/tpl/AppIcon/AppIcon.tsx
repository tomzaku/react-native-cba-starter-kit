import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { IconProps } from 'react-native-elements'
import { compose, pure } from 'recompose';

const AppIconScreen = (props: IconProps) => (
	<Icon size={20} {...props}  />
)

export const AppIcon = compose<IconProps, IconProps>(pure)(AppIconScreen)