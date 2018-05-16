import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  container: {
    ...applicationStyle.mainCon,
    flexDirection: 'row',
  },

  leftContainer: {
    ...applicationStyle.mainCon,
    flex: 11,
    zIndex: 99999999,
  },
  rightContainer: {
    ...applicationStyle.mainCon,
    ...applicationStyle.borderLeft,
    flex: 16,
  },
});