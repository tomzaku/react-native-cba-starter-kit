import { TRootState } from '@conf/redux/reducer'
import { withStyles } from '@theme/helper/context'
import { getTheme } from '@theme/themeHelper'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch } from 'redux'
import { changeTheme } from '../logic.redux/action'
import { styles } from './SelectTheme.style'

const SelectTheme = ({ changeTheme, themeType, styles }) => {
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
	changeTheme: () => dispatch(changeTheme()),
})

const withRedux = connect(mapStateToProps, mapActionToProps)

export const SelectThemeScreen = compose(withRedux, withStyles(styles), pure)(SelectTheme)
