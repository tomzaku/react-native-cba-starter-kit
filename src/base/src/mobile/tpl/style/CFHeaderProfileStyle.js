import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  row: {
    justifyContent: 'center',
  },
  header: {
    // flexDirection: 'column',
    ...applicationStyle.con,
    justifyContent: 'center',
    backgroundColor: color.BIG_HEADER,
    // elevation: metric.ELEVATION,
    // paddingLeft: metric.MARGIN,
    // paddingTop: metric.MARGIN_S,
    flex: 0,
  },
  avatar: {
    ...applicationStyle.avatar,
    // height: metric.AVATAR_PROVIDER,
    // width: metric.AVATAR_PROVIDER,
    // borderRadius: metric.AVATAR_PROVIDER / 2,
    // borderColor: color.AVATAR_BORDER,
    // borderWidth: color.AVATAR_BORDER_WIDTH,
  },
  name: {
    ...applicationStyle.titleHl,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  major: {
    ...applicationStyle.descHl

  },
  phone: {
    ...applicationStyle.descHl
  },
  infoTextComponent: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metric.MARGIN_S,
  },
  textHeader: {
    ...applicationStyle.titleColor,

  }
});
