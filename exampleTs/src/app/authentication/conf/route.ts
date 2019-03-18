import AuthLoginScreen from '../screen/login'
import AuthLoadingScreen from '../screen/loading'
import * as routeUtil from '@router/util/make'

export default routeUtil.make({
    AuthLogin: {
        phone: {
            screen: AuthLoginScreen,
            navigationOptions: () => ({
                header: null
            })
        }
    },
    AuthLoading: {
        phone: AuthLoadingScreen
    }
})