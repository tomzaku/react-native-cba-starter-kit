import { createStackNavigator, NavigationRouteConfigMap } from "react-navigation";
import DeviceInfo from 'react-native-device-info';
import * as ramda from 'ramda'

type Route = {
    phone: NavigationRouteConfigMap,
    tablet?: NavigationRouteConfigMap,
}

// const isDuplicatedKey = (keys: string[]) => {
//     for(let index= 0; index < keys.length; index++ ) {
//         if (ramda.lastIndexOf(keys[index], keys) !== index) {
//             throw `Key ${keys[index]} is dupplicated. Rename  ${keys[index]} to fix`
//             return index
//         }
//     }
//     return false
// }

const make = <T extends { [key: string]: Route}>(routes: T) => {
   return ramda.mapObjIndexed((item) => DeviceInfo.isTablet() && item.tablet || item.phone, routes) as  Record<keyof T, NavigationRouteConfigMap>
}

export {
    make
}