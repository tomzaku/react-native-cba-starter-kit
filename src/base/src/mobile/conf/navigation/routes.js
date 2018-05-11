/**
* @providesModule CFRoutes
*/

import React, { Component, PureComponent } from 'react';
import { screenList } from '../helper/module'
// import * as AllPatientScreen from '../../module/patient/view/index'

// DEVICE_TYPE will return 'phone' or 'tablet'
import { DEVICE_TYPE } from 'AppSetting';
import { getSessionHeader, getMainTabNavigator } from './tabBuilder';
import _ from 'lodash'

export const overridePropertyToTablet = (oldRoutes, generalType) => {
  let routes = _.cloneDeep(oldRoutes)
  Object.keys(routes).map(( screenKey, index ) => {
    const generalProperties = routes[screenKey][generalType]
    routes[screenKey][DEVICE_TYPE] = routes[screenKey][DEVICE_TYPE] || {}
    Object.keys(generalProperties).map(( propertyKey, index) => {
      if (!routes[screenKey][DEVICE_TYPE][propertyKey]) {
        routes[screenKey][DEVICE_TYPE][propertyKey] = generalProperties[propertyKey]
      }
    })
  })

  return routes
}

const overridePropertyOneColumn = (routes, generalType) => {
  Object.keys(routes).map(( screenKey, index ) => {
    switch(screenKey) {
      case 'AllPatient': 
      case 'TimeLineEncounter': 
      case 'AllPractitioner': {
        let routeOneColumn = `${screenKey}OneColumn`
        routes[routeOneColumn] = {
          phone: routes[screenKey][generalType]
        }
      }
    }
  })
  return routes
}

// Which screen for which specific device take some config
// export const screenList = {
//   AllPatient: {
//     phone: {
//       tabBarLabel: 'PATIENT',
//       icon: 'ios-person-outline',
//       title: 'Patients',
//       screen: Screen.AllPatientScreen,
//     },
//     tablet: {
//       screen: Screen.AllPatientTabletScreen,
//     },
//   },
//   SinglePatient: {
//     phone: {
//       title: 'Detail',
//       screen: Screen.SinglePatientScreen,
//     },
//     // tablet: {
//     //   screen: Screen.SinglePatientTabletScreen,
//     // },
//   },
//   ModifyPatient: {
//     phone: {
//       title: 'Detail',
//       screen: Screen.ModifyPatientScreen,

//     },
//   },
//   NewPatient: {
//     phone: {
//       title: 'Create',
//       screen: Screen.NewPatientScreen,

//     },
//   },
//   // SearchPatient: {
//   //   phone: {
//   //     title: 'Search',
//   //     screen: Screen.SearchPatientScreen,

//   //   },
//   // },
//   AllPractitioner: {
//     phone: {
//       title: 'Practitioners',
//       tabBarLabel: 'PRACTITIONER',
//       icon: 'ios-contact-outline',
//       screen: Screen.AllPractitionerScreen,
//     },
//     tablet: {
//       screen: Screen.AllPractitionerTabletScreen,
//     },
//   },
//   SinglePractitioner: {
//     phone: {
//       title: 'Detail',
//       screen: Screen.SinglePractitionerScreen,
//     },
//     tablet: {
//       screen: Screen.SinglePractitionerTabletScreen,
//     },
//   },
//   ModifyPractitioner: {
//     phone: {
//       title: 'Modify',
//       screen: Screen.ModifyPractitionerScreen,
//     },
//     tablet: {
//       screen: Screen.ModifyPractitionerScreen,
//     },
//   },
//   MergePractitioner: {
//     phone: {
//       title: 'Merge',
//       screen: Screen.MergePractitionerScreen,
//     },
//     tablet: {
//       screen: Screen.MergePractitionerScreen,
//     },
//   },
//   TimeLineEncounter: {
//     phone: {
//       title: 'Encounter',
//       screen: Screen.TimeLineEncounterScreen,
//     },
//     tablet: {
//       screen: Screen.TimeLineEncounterTabletScreen,
//     }
//   },
//   PatientEncounter: {
//     phone: {
//       title: 'Encounter',
//       screen: Screen.PatientEncounterScreen,
//     },
//   },
//   AllOrganization: {
//     phone: {
//       title: 'Organizations',
//       tabBarLabel: 'ORGANIZATION',
//       icon: 'ios-home-outline',
//       screen: Screen.AllOrganizationScreen,
//     },
//     tablet: {
//       screen: Screen.AllOrganizationTabletScreen,
//     },
//   },
//   SingleOrganization: {
//     phone: {
//       title: 'Detail',
//       screen: Screen.SingleOrganizationScreen,
//     },
//     tablet: {
//       screen: Screen.SingleOrganizationScreen,
//     },
//   },
//   ModifyOrganization: {
//     phone: {
//       title: 'Modify',
//       screen: Screen.ModifyOrganizationScreen,
//     },
//     tablet: {
//       screen: Screen.ModifyOrganizationScreen,
//     },
//   },

//   Profile: {
//     phone: {
//       title: 'Profile',
//       tabBarLabel: 'PROFILE',
//       icon: 'account-circle',
//       screen: Screen.ProfileScreen,

//     },
//   },
//   ModifyProfile: {
//     phone: {
//       title: 'Modify',
//       screen: Screen.ModifyProfileScreen,

//     },
//     tablet: {
//       screen: Screen.ModifyProfileScreen,

//     },
//   },
//   SettingProfile: {
//     phone: {
//       title: 'Setting',
//       screen: Screen.SettingProfileScreen,

//     },
//     tablet: {
//       screen: Screen.SettingProfileScreen,

//     },
//   },
//   // Camera: {
//   //   phone: {
//   //     title: 'Camera',
//   //     screen: Screen.CameraScreen,

//   //   },
//   // },
//   // Library: {
//   //   phone: {
//   //     title: 'Library',
//   //     screen: Screen.LibraryScreen,

//   //   },
//   // },
//   Conversation: {
//     phone: {
//       title: 'Conversation',
//       screen: Screen.ConversationScreen,

//     },
//   },
//   MapSearch: {
//     phone: {
//       title: 'Map',
//       screen: Screen.MapSearchScreen,

//     },
//   },
//   UploadImage: {
//     phone: {
//       title: 'Upload Image',
//       screen: Screen.UploadImageScreen,

//     },
//   },
//   Login: {
//     phone: {
//       headerMode: "none",
//       screen: Screen.LoginScreen,

//     },
//     tablet: {
//       screen: Screen.LoginTabletScreen,

//     }
//   },
//   LoadingAuthentication: {
//     phone: {
//       headerMode: "none",
//       screen: Screen.LoadingAuthentication,
//     },
//   },
//   Totp: {
//     phone: {
//       headerMode: "none",
//       screen: Screen.TotpScreen,
//     },
//   },
//   Alexa: {
//     phone: {
//       title: 'Alexa Screen',
//       screen: Screen.AlexaScreen,
//     },
//   },
//   FormAlexa: {
//     phone: {
//       title: 'Form Register',
//       screen: Screen.FormRegister,
//     },
//   },
//   SettingAlexa: {
//     phone: {
//       title: 'Setting Alexa',
//       screen: Screen.SettingAlexaScreen,
//     },
//   },
//   AboutAlexa: {
//     phone: {
//       title: 'Help',
//       screen: Screen.AboutAlexaScreen,
//     },
//   },
//   HoldingPlaceHolder: {
//     phone: {
//       title: 'PlaceHolder',
//       screen: Screen.HoldingPlaceHolderScreen,
//     },
//   },
//   Menu: {
//     phone: {
//       title: 'Menu',
//       screen: Screen.MenuScreen,
//       icon: 'contacts',
//       tabBarLabel: 'Menu',
//       icon: 'md-reorder',
//     },
//     tablet: {
//       screen: Screen.MenuTabletScreen,
//     },
//   },
//   AlexaChat: {
//     phone: {
//       screen: Screen.AlexaChatScreen,
//       title: 'Alexa',
//     },
//   },
//   ListEncounter: {
//     phone: {
//       screen: Screen.ListEncounterScreen,
//       title: 'Encounter',
//       tabBarLabel: 'Encounter',
//       icon: 'ios-eye-outline',
//     },
//     tablet: {
//       screen: Screen.ListEncounterTabletScreen,
//     }
//   },
//   StatusEncounter: {
//     phone: {
//       screen: Screen.StatusEncounterScreen,
//       title: 'Status',
//     },
//   },
//   FormEncounter: {
//     phone: {
//       screen: Screen.FormEncounterScreen,
//       title: 'Form',
//     },
//   },
//   ListGiftCard: {
//     phone: {
//       screen: Screen.ListGiftCardScreen,
//       title: 'List Gift Card',
//     },
//   },
//   // Test: {
//   //   phone: {
//   //     screen: Screen.TestScreen,
//   //     title: 'Test',
//   //   },
//   // },
// };


// Include session or tab navigation
export const getRouteAdvanced = () =>( {
  PractitionOrganization: {
    phone: {
      title: 'General',
      icon: 'location-city',
      tabBarLabel: 'General',
      // screen: getSessionHeader(['AllOrganization', 'AllPractitioner']),
      screen: getMainTabNavigator(['AllOrganization', 'AllPractitioner']),
      headerMode: "none",
      // screen: getSessionHeader(['AllPractitioner']),
    }
  }
})

const router = (options = {}) => {
  const { isNested = false } = options
  let Route = screenList;
  if (isNested) {
    Route ={
      ...Route,
      ...getRouteAdvanced(),
    }
  }
  screenListOneColumn = overridePropertyOneColumn(Route, 'phone')
  if (DEVICE_TYPE != 'phone') {
    return overridePropertyToTablet(screenListOneColumn, 'phone')
  }
  return screenListOneColumn
}

export default router;
