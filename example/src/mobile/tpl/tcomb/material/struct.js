var React = require("react");
var { View, Text, StyleSheet } = require("react-native");
import { color, metric, font, applicationStyle } from 'AppTheme';
import { AppIcon } from 'AppComponent';

function struct(locals) {

  if (locals.hidden) {
    return null;
  }
  var stylesheet = locals.stylesheet;
  var fieldsetStyle = stylesheet.fieldset;
  var controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  var label = locals.label ? (
    <Text style={styles.titleHeader}>{locals.label}</Text>
  ) : null;
  var error =
    locals.hasError && locals.error ? (
      <Text accessibilityLiveRegion="polite" style={stylesheet.errorBlock}>
        {locals.error}
      </Text>
    ) : null;

  var rows = locals.order.map(function(name) {
    return locals.inputs[name];
  });
  return (
    <View style={[fieldsetStyle]}>
      {/* {label} */}
      {locals.label
        ? <View style={styles.header}>
          {locals.config.icon
            ? (<AppIcon
              name={locals.config.icon}
              color={'white'}
              size={20}
            />)
            : (<Text style={styles.textInteadIcon}>{locals.label ? locals.label[0] : ''}</Text>)}
          {label}
          </View>
        : null
      }
      <View style={[locals.label ? styles.body : {}]}>
        {rows}
      </View>
      {error}
    </View>
  );
}

module.exports = struct;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: metric.MARGIN_XS,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingBottom: metric.MARGIN_XS,
    borderBottomWidth: metric.BORDER,
    borderLeftWidth: metric.BORDER,
    borderRightWidth: metric.BORDER,
    borderColor: color.LINE_BORDER,
    borderBottomLeftRadius: metric.BORDER_RADIUS,
    borderBottomRightRadius: metric.BORDER_RADIUS,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: color.NAV_HEADER,
    paddingTop: metric.MARGIN_XXS,
    paddingBottom: metric.MARGIN_XXS,
    paddingLeft: metric.MARGIN_XS,
    paddingRight: metric.MARGIN_XS,
    alignItems: 'center',
    borderTopLeftRadius: metric.BORDER_RADIUS,
    borderTopRightRadius: metric.BORDER_RADIUS,
  },
  titleHeader: {
    flex: 1,
    ...applicationStyle.txtHl,
    marginLeft: metric.MARGIN_XS,
    fontWeight: 'bold'
  },
  textInteadIcon: {
    ...applicationStyle.txtHl,
  },

});
