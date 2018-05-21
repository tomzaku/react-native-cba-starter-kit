import SandBoxScreen from './SandBoxScreen'
import SandBoxTabletScreen from './SandBoxScreen'


export default {
  SandBox: {
    phone: {
      title: 'SandBox',
      screen: SandBoxScreen,
    },
    tablet: {
      // Tablet will override all mobile's properties
      screen: SandBoxTabletScreen,
    }
  },
};
