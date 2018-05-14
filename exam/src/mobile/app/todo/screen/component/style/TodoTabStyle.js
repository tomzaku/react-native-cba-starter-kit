import { StyleSheet } from "react-native";
import { metric, color, applicationStyle, font } from "AppTheme";

export default StyleSheet.create({
  container: {
    ...applicationStyle.mainContainCon
    // backgroundColor: color.
  },
  itemTitle: {
    ...applicationStyle.title,
    paddingLeft: metric.MARGIN_S
  },
  itemContainer: {
    marginVertical: metric.MARGIN_XXS,
    paddingVertical: metric.MARGIN_XXS,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: "row",
    paddingHorizontal: metric.MARGIN_S
  },
  moveRightComponent: {
    paddingHorizontal: metric.MARGIN_XS,
    paddingVertical: metric.MARGIN_XXS,
  }
});
