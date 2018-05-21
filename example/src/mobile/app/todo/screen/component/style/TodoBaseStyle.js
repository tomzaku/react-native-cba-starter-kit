import { StyleSheet } from "react-native";

export default ({metric, color, applicationStyle, font}) => StyleSheet.create({
  container: {
    ...applicationStyle.mainCon,
  },
  itemTitle: {
    ...applicationStyle.title,
  },
  buttonNext: {
    marginVertical: metric.MARGIN_XS,
    padding: 0,
    paddingHorizontal: metric.MARGIN_XS,
    paddingVertical: 0,
  },
  itemContainer: {
    marginVertical: metric.MARGIN_XXS,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: "row",
    paddingRight: metric.MARGIN_S
  },
});
