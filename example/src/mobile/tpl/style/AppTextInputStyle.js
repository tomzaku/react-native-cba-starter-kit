import { StyleSheet } from "react-native";
import { metric, color, applicationStyle, font } from "AppTheme";

export default StyleSheet.create({
  input: {
    height: metric.INPUT_HEIGHT,
    flex: 1
  },
  textInputComponent: {
    ...applicationStyle.txtInput,
    paddingLeft: metric.MARGIN_XS,
    borderTopWidth: metric.BORDER_S,
    borderTopColor: color.BORDER
  },
  button: {
    ...applicationStyle.center,
    alignItems: 'flex-end'
    // paddingLeft: metric.MARGIN,
    // flex: 1,
    // width: metric.ICON_L
  },
  icon: {
    
  },
});
