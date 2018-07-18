import { TRootState } from '@conf/redux/reducer'
import { withStyles, WithStyles } from '@theme/helper/context'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch } from 'redux'
import { changeTheme } from '../logic.redux/action'
import { TTheme } from '../logic.redux/initalState'
import { styles } from './SelectTheme.style'

interface SelectThemePropsOut {

}
interface SelectThemeStateProps {
	themeType: TTheme
}
interface SelectThemeActionsProps {
	changeTheme: () => void
}

interface SelectThemePropsIn extends SelectThemePropsOut, WithStyles<typeof styles>, SelectThemeActionsProps, SelectThemeStateProps {

}

const SelectTheme = ({ changeTheme, themeType, styles }: SelectThemePropsIn) => {
	return (
		<View style={styles.container}>
			<Button title={'Change Theme'} raised onPress={changeTheme}/>
		</View>
	)
}

const mapStateToProps = (state: TRootState) => ({
	themeType: state.setting.theme.paletteType,
})

const mapActionToProps = (dispatch: Dispatch) => ({
	// When apply changeTheme it will render all screen that in reactnavigation's stack (including tab: That will cause performance)
	changeTheme: () => dispatch(changeTheme()),
})

const withRedux = connect(mapStateToProps, mapActionToProps)

export const SelectThemeScreen = compose<SelectThemePropsIn, SelectThemePropsOut>(withRedux, withStyles(styles), pure)(SelectTheme)
