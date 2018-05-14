import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

export default StyleSheet.create({
  button: {
    ...applicationStyle.btn,
  },
  success: {
    backgroundColor: color.success,
  },
  info: {
    backgroundColor: color.info,
  },
  successText: {
    color: 'white',
  },
  infoText: {
    color: 'white',
  },
  large: {
    // paddingTop: metric.MARGIN,
    // paddingBottom: metric.MARGIN,
  },
  leftRightComponent: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  large: {
    paddingVertical: metric.MARGIN_S,
  },
  medium: {
    paddingVertical: metric.MARGIN_XS,
  },
  largeText: {
    ...font.style.h5,
  },
  mediumText: {
    ...font.style.h4,
    // paddingVertical: metric.MARGIN,
    // paddingBottom: metric.MARGIN,
  },
  text: {
    ...applicationStyle.titleHl,
    ...font.style.normal,
    alignSelf: 'center',
  },
  rounded: {
    borderRadius: 2000,
  },
  primary: {
    backgroundColor: color.primary,
  },
  warning: {
    backgroundColor: color.warning,
  },
  danger: {
    backgroundColor: color.danger,
  },
  dark: {
    backgroundColor: color.BUTTON,
  },
});

