import AuthLoginScreen from '../screen/login'
import AuthLoadingScreen from '../screen/loading'
import * as routeUtil from '@router/util/make'

export default routeUtil.make({
    AuthLogin: {
        phone: AuthLoginScreen,
    },
    AuthLoading: {
        phone: AuthLoadingScreen
    }
})