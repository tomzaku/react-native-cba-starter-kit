import React from 'react'
import { TRootState } from '@conf/redux/reducer'
import { connect } from 'react-redux'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import AuthRoute from './authRoute'
import MainRoute from './mainRoute'
import authRedux from '@app/authentication/redux'
import { View, Text } from 'react-native'
import { createStructuredSelector } from 'reselect';
import { AuthenticationState } from '@app/authentication/redux/reducer';

type OwnProps = {}
type StorageProps = {
    isAuthenticated: AuthenticationState['isAuthentication'],
}
type Props = OwnProps & StorageProps

const RouterScreen = (props: Props) => {
    const Router = createAppContainer(createSwitchNavigator(
        {
            Auth: AuthRoute,
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
const mapStateToProps = createStructuredSelector({
    isAuthenticated: authRedux.selector.isAuthenticated,
})

export default connect(mapStateToProps)(RouterScreen)
