import * as React from "react"
import MainProfileScreen from '../screen/tab'
import DetailProfileScreen from '../screen/detail'
import * as routeUtil from '@router/util/make'

export default routeUtil.make({
    MainProfile: {
        phone: {
            screen: MainProfileScreen,
            navigationOptions: () => ({
                title: 'Profile'
            })
        }
    },
    DetailProfile: {
        phone: {
            screen: DetailProfileScreen
        }
    },
})