var React = require("react");
var {View, Text} = require("react-native");
var {TextField} = require('react-native-material-textfield')
import { font } from 'AppTheme'

function textbox(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var textboxStyle = stylesheet.textbox.normal;
  var textboxViewStyle = stylesheet.textboxView.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    textboxStyle = stylesheet.textbox.error;
    textboxViewStyle = stylesheet.textboxView.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  if (locals.editable === false) {
    textboxStyle = stylesheet.textbox.notEditable;
    textboxViewStyle = stylesheet.textboxView.notEditable;
  }

  return (
    <View style={formGroupStyle}>
      <TextField
        error={ locals.error || locals.hasError }
        label={locals.label}
        ref="input"
        title={locals.help}
        labelHeight={font.size.FONT_SIZE_XXL}
        baseColor={controlLabelStyle.color}
        titleTextStyle={helpBlockStyle}
        
        tintColor={textboxStyle.borderColor}
        autoCapitalize={locals.autoCapitalize}
        autoCorrect={locals.autoCorrect}
        autoFocus={locals.autoFocus}
        blurOnSubmit={locals.blurOnSubmit}
        clearButtonMode={locals.clearButtonMode}
        clearTextOnFocus={locals.clearTextOnFocus}
        editable={locals.editable}
        enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
        keyboardAppearance={locals.keyboardAppearance}
        keyboardType={locals.keyboardType}
        maxLength={locals.maxLength}
        multiline={locals.multiline}
        numberOfLines={locals.numberOfLines}
        onBlur={locals.onBlur}
        onChange={locals.onChangeNative}
        onChangeText={value => locals.onChange(value)}
        onContentSizeChange={locals.onContentSizeChange}
        onEndEditing={locals.onEndEditing}
        onFocus={locals.onFocus}
        onKeyPress={locals.onKeyPress}
        onLayout={locals.onLayout}
        onSelectionChange={locals.onSelectionChange}
        onSubmitEditing={locals.onSubmitEditing}
        placeholder={locals.placeholder}
        placeholderTextColor={locals.placeholderTextColor}
        returnKeyType={locals.returnKeyType}
        secureTextEntry={locals.secureTextEntry}
        selectTextOnFocus={locals.selectTextOnFocus}
        selectionColor={locals.selectionColor}
        selectionState={locals.selectionState}
        style={textboxStyle}
        underlineColorAndroid={locals.underlineColorAndroid}
        value={locals.value}
      />
    </View>
  );
}

module.exports = textbox;
