import MainScreen from '../screen/main'
import * as routeUtil from '@router/util/make'

export default routeUtil.make({
    MainCount: {
        phone: {
            screen: MainScreen,
            navigationOptions: () => ({
                title: 'AHIHI'
            })
        }
    }
})