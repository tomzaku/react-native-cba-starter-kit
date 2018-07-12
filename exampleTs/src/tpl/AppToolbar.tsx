import React from 'react'
import { Toolbar, ToolbarProps } from 'react-native-material-ui'
import { TRootState } from '../conf/redux/reducer'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { withStyles } from '@theme/helper/context'
import { styles } from './AppToolbar.style'

export interface AppToolBarPropsOut extends ToolbarProps {

}
export interface AppToolBarPropIn extends AppToolBarPropsOut {
}

const leftRightElement = (element = null) => (
	<View style={{ flex: 1 }}>
		{element}
	</View>
)

const ToolbarView = ({ styles, leftElement, rightElement }: AppToolBarPropIn) => {
	const leftElementEnhanced = (
		<View>

		</View>
	)
	return (
		<Toolbar {...restToolBar}
			centerElement={'aa'}
			style={{
				container: styles.container,
				titleText: styles.titleText,
				centerElementContainer: styles.centerElementContainer,
			}}
		/>
	)
}

export const AppToolbar = compose<AppToolBarPropIn, AppToolBarPropsOut>(withStyles(styles), pure)(ToolbarView)
