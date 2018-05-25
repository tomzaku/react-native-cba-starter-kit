var React = require("react");
var { View, Text, Switch } = require("react-native");
import { AppSwitch } from 'AppComponent'

function checkbox(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var checkboxStyle = stylesheet.checkbox.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    checkboxStyle = stylesheet.checkbox.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  return (
    <View style={formGroupStyle}>
      <AppSwitch
        label={locals.label}
        labelStyle={controlLabelStyle}
        desc={locals.help}
        descStyle={helpBlockStyle}
        error={locals.error}
        accessibilityLabel={locals.label}
        ref="input"
        disabled={locals.disabled}
        onTintColor={locals.onTintColor}
        thumbTintColor={locals.thumbTintColor}
        tintColor={locals.tintColor}
        style={checkboxStyle}
        onValueChange={value => locals.onChange(value)}
        value={locals.value}
      />
    </View>
  );
}

module.exports = checkbox;
