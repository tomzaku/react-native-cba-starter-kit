import { Text } from 'react-native'
import DebugConfig from './debugConfig'
import i18n from './i18n'
import tcomb from './tcomb'
if (global.__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !DebugConfig.yellowBox
}