import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  container: {
    ...applicationStyle.center,
  },
  avatar: {
    ...applicationStyle.avatar,
  },
  editComponent: {
    overflow: 'hidden',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  edit: {
    flex: 1,
    backgroundColor: 'rgba(38, 141, 249, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
