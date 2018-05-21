import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  container: {
    height: 50,
  },
  containerItem: {},
  textItem: {
    flex: 1,
    ...applicationStyle.title,
    // fontSize: metric.FONT_SIZE_L,
    margin: metric.MARGIN_S,
  },
  textItemComponent: {
    // backgroundColor:'#f2f2f2',
    flex: 1,
    backgroundColor: color.CARD
  },
  textItemComponentSelected: {
    backgroundColor: color.CONTAIN_ITEM_BACKGROUND,
  },
  line: {
    backgroundColor: color.CONTAIN_ITEM_BACKGROUND,
  },
  textItemSelected: {
    margin: metric.MARGIN_S,
  },
});
