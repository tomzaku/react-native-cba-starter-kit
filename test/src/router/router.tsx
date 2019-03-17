import React from 'react'
import { TRootState } from '@conf/redux/reducer'
import { connect } from 'react-redux'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import AuthRoute from './authRoute'
import MainRoute from './mainRoute'
import app from '@app/index';
import { View, Text } from 'react-native'

type OwnProps = {}
type StorageProps = {
    isAuthenticated: boolean,
}
type Props = OwnProps & StorageProps

const RouterScreen = (props: Props): any => {
    const Router = createAppContainer(createSwitchNavigator(
        {
            Auth: AuthRoute,
            // Loading: app.route.AuthLoading,
            Main: MainRoute
        },
        {
            initialRouteName: props.isAuthenticated && 'Main' || 'Auth',
        }
    ))
    return  (
        <View style={{flex: 1}}>
            <Router />
        </View>
    )
}
const mapStateToProps = (state: TRootState) => ({
    isAuthenticated: state.authentication.isAuthentication
})

export default connect(mapStateToProps)(RouterScreen)
