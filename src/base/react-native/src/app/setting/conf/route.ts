import SettingScreen from '../screen/main'
import * as routeUtil from '@router/util/make'

export default routeUtil.make({
    SettingMain: {
        phone: {
            screen: SettingScreen,
            navigationOptions: () => ({
                title: 'Setting',
            })
        }
    }
})