import FormScreen from './FormScreen'
import FormTabletScreen from './FormScreen'


export default {
  Form: {
    phone: {
      title: 'Form',
      screen: FormScreen,
    },
    tablet: {
      // Tablet will override all mobile's properties
      screen: FormTabletScreen,
    }
  },
};
