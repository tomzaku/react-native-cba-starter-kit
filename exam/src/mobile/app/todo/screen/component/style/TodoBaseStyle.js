import { StyleSheet } from "react-native";
import { metric, color, applicationStyle, font } from "AppTheme";

export default StyleSheet.create({
  container: {
    ...applicationStyle.mainContainCon
    // backgroundColor: color.
  },
  itemTitle: {
    ...applicationStyle.title,
    // paddingLeft: metric.MARGIN_S
  },
  buttonNext: {
    // flex: 0,
    marginVertical: metric.MARGIN_XS,
    padding: 0,
    paddingHorizontal: metric.MARGIN_XS,
    paddingVertical: 0,
    // height: 20
  },
  itemContainer: {
    marginVertical: metric.MARGIN_XXS,
    // paddingVertical: metric.MARGIN_XXS,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: "row",
    paddingRight: metric.MARGIN_S
  },

});
