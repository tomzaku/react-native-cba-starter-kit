import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  container: {
    ...applicationStyle.cardRow,
    flexDirection: 'row',
    padding: metric.MARGIN_XS,
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardSelectedContainer: {
    backgroundColor: color.CARD_SELECTED,
  },
  title: {
    // fontSize: metric.FONT_SIZE_L,
    ...applicationStyle.title,
  },
  selectedTitle: {
    ...applicationStyle.titleHl,
  },
  subtitleUp: {
    ...applicationStyle.desc,
    // fontSize: metric.FONT_SIZE_XS,
    color: color.TITLE_COLOR,
  },
  subtitleDown: {
    ...applicationStyle.desc,
    // color: color.SUBTITLE_HIGHLIGH,
  },
  selectedSubtitleUp: {
    color: color.SUBTITLE
  },
  selectedSubtitleDown: {
    color: color.SUBTITLE_HIGHLIGH,
  },
  middleComponent: {
    flexDirection: 'column',
    marginLeft: metric.MARGIN_S,
    flex: 1,
  },
  cardContainer: {
    flex: 1,
  },
});
