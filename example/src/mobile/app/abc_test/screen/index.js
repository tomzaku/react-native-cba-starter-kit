import AbcTestScreen from './AbcTestScreen'
import AbcTestTabletScreen from './AbcTestScreen'


export default {
  AbcTest: {
    phone: {
      title: 'AbcTest',
      screen: AbcTestScreen,
    },
    tablet: {
      // Tablet will override all mobile's properties
      screen: AbcTestTabletScreen,
    }
  },
};
