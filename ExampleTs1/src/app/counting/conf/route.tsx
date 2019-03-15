import * as React from "react"
import MainScreen from '../screen/main'
import * as routeUtil from '@router/util/make'
import { Text } from 'react-native';

export default routeUtil.make({
    MainCount: {
        phone: {
            screen: MainScreen,
            navigationOptions: () => ({
                header: null,
                title: 'Home',
                tabBarLabel:'HIHI',
                headerStyle: {
                backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            })
        }
    }
})