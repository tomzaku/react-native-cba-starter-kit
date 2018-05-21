import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: color.INPUT_BORDER,
    backgroundColor: color.INPUT_BACKGROUND,
    height: 50,
  },
  filterTypeText: {
    fontSize: metric.FONT_SIZE,
  },
  textType: {
    fontSize: metric.FONT_SIZE,
    marginLeft: metric.MARGIN,
  },
  textTypeSelected: {
    fontSize: metric.FONT_SIZE,
    marginLeft: metric.MARGIN,
    fontWeight: 'bold',
    // color: color.primary,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  typeComponent: {
    flexDirection: 'row',
  },

});
