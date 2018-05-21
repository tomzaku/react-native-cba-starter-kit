import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  textItem: {
    ...font.style.h5,
    fontWeight: '300',
    color: color.TITLE,
  },
  textItemComponent: {
    ...applicationStyle.center,
    width: 60,
  },
  textItemComponentSelected: {
    backgroundColor: color.CONTAIN_ITEM_BACKGROUND,
  },
  textItemSelected: {
    fontWeight: '600',
    color: color.TITLE,
  },
});
