import { color, metric, font, applicationStyle } from 'AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CFFormLabel, CFFormInput } from 'AppComponent';
import { View, Text, StyleSheet, Platform } from 'react-native';
import StyleTcomb from './styles';

const React = require('react');

function struct(locals) {
  if (locals.hidden) {
    return null;
  }

  let stylesheet = locals.stylesheet;
  stylesheet.textbox.normal = {
    // ...stylesheet.textbox.normal,
    ...StyleTcomb.textbox.normal,
  };

  stylesheet.textboxView.normal = {
    // backgroundColor: 'red'
    ...StyleTcomb.textboxView.normal,
  };

  stylesheet.controlLabel.normal = {
    ...StyleTcomb.controlLabel.normal,
  };

  const fieldsetStyle = stylesheet.fieldset;

  const label = locals.label
    ? <Text style={styles.titleHeader}>{locals.label}</Text>
    : null;
  const error = locals.hasError && locals.error
    ? (<Text
      accessibilityLiveRegion="polite"
      style={stylesheet.errorBlock}
    >
      {locals.error}
    </Text>)
    : null;
  let rows = locals.order.map(name => locals.inputs[name]);
  for (let index = 0; index < rows.length; index += 1) {
    rows[index].props.ctx.label = rows[index].props.ctx.label.toUpperCase();
  }
  return (
    <View style={fieldsetStyle}>
      <View style={styles.header}>
        {stylesheet.iconTitle
        ? (<Icon
          name={stylesheet.iconTitle}
          color={'white'}
          size={20}
        />)
        : (<Text style={styles.textInteadIcon}>{locals.label[0]}</Text>)}
        {label}
      </View>
      {error}
      {rows}
    </View>
  );
}

module.exports = struct;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: color.NAV_HEADER,
    paddingTop: metric.MARGIN_XXS,
    paddingBottom: metric.MARGIN_XXS,
    paddingLeft: metric.MARGIN,
    paddingRight: metric.MARGIN,
    alignItems: 'center',
  },
  titleHeader: {
    flex: 1,
    ...applicationStyle.txtHl,
    marginLeft: metric.MARGIN,
  },
  textInteadIcon: {
    ...applicationStyle.txtHl,
  },
  body: {
    // padding:metric.MARGIN,
    // paddingTop: metric.MARGIN,
    paddingBottom: metric.MARGIN,
    paddingTop: 0,
  },
});
