import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  container: {
    // flex: 1,
  },
  titleHeader: {
    flex: 1,
    ...applicationStyle.titleHl,
    marginLeft: metric.MARGIN,
  },
  header: {
    flexDirection: 'row',
    // backgroundColor: ThemeColor.secondary,
    backgroundColor: color.NAV_HEADER,
    paddingVertical: metric.MARGIN_XXS,
    paddingHorizontal: metric.MARGIN,
  },
  text: {
    ...applicationStyle.txt,
    marginBottom: metric.MARGIN_XS,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnRight: {
    flex: 3,
  },
  body: {
    margin: metric.MARGIN,
  },
  iconRow: {
    marginRight: metric.MARGIN,
    color: color.BOTTOM_TABBAR_ICON_SELECTED,

  },
  titleRow: {
    ...applicationStyle.txt,
    fontWeight: '600',
    // fontWeight: metric.FONT_WEIGHT_TITLE,
    // marginBottom:metric.MARGIN_XS,
    flex: 1,
  },
});
