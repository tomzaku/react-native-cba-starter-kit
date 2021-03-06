import * as React from "react"
import MainScreen from '../screen/main'
import DetailScreen from '../screen/detail'
import * as routeUtil from '@router/util/make'

export default routeUtil.make({
    MainCount: {
        phone: {
            screen: MainScreen,
            navigationOptions: () => ({
                title: 'Counting Header',
            })
        }
    },
    DetailCount: {
        phone: {
            screen: DetailScreen
        }
    },
})