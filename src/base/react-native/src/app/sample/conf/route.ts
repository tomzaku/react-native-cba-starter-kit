import SampleScreen from '../screen/main'
import * as routeUtil from '@router/util/make'

export default routeUtil.make({
    SampleMain: {
        phone: {
            screen: SampleScreen,
            navigationOptions: () => ({
                title: 'Sample Header',
            })
        }
    }
})