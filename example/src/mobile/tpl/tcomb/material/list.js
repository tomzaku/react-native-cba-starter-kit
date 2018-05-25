var React = require("react");
var { View, Text, TouchableHighlight } = require("react-native");
import { AppButton, AppIcon, AppLine, AppText } from 'AppComponent'
import { color, metric, font,  } from 'AppTheme';
import { connect } from 'react-redux';

function renderRowWithoutButtons(item) {
  return <View key={item.key}>{item.input}</View>;
}

function renderRowButton(button, stylesheet, style) {
  return (
    <TouchableHighlight
      key={button.type}
      style={[stylesheet.button, style]}
      onPress={button.click}
    >
      <Text style={stylesheet.buttonText}>{button.label}</Text>
    </TouchableHighlight>
  );
}

function renderRowButtonCustomize(button, stylesheet) {
  switch (button.type) {
    case 'remove': return (
      <View style={{flexDirection: 'row'}}>
        <AppLine vertical type={'thin'} style={{height: '80%'}}/>
        <AppIcon
          name={'ios-trash-outline'}
          // size={20}
          key={button.type}
          style={{ marginLeft: metric.MARGIN_XS }}
          color={color.error}
          onPress={button.click}
        />
      </View>
    );
    case 'move-up': return (
      <AppIcon
        name={'ios-arrow-up-outline'}
        key={button.type}
        onPress={button.click}
      />
    );
    case 'move-down': return (
      <AppIcon
        name={'ios-arrow-down-outline'}
        key={button.type}
        onPress={button.click}
      />
    );
    default: return null;
  }
}

function renderButtonGroup(buttons, stylesheet) {
  return (
    <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }}>
      {buttons.reverse().map((button, index) =>
        renderRowButtonCustomize(button, stylesheet, index))
      }
    </View>
  );
}

function renderRow(item, stylesheet, index) {
  item.input.props.ctx.label = `${item.input.props.ctx.label.split('[')[0]} ${index + 1}`
  return (
    <View key={item.key} style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>{item.input}</View>
      {renderButtonGroup(item.buttons, stylesheet)}
    </View>
  );
}

function list(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var fieldsetStyle = stylesheet.fieldset;
  var listLabelStyle = stylesheet.listLabel.normal;

  if (locals.hasError) {
    listLabelStyle = stylesheet.listLabel.error;
  }

  var label = locals.label ? (
    <AppText style={[listLabelStyle]} onPress={locals.add.click}>{locals.label}</AppText>
  ) : null;
  var error =
    locals.hasError && locals.error ? (
      <AppText accessibilityLiveRegion="polite" style={[stylesheet.errorBlock]} onPress={locals.add.click}>
        {locals.error}
      </AppText>
    ) : null;

  var rows = locals.items.map(function(item, index) {
    return item.buttons.length === 0
      ? renderRowWithoutButtons(item)
      : renderRow(item, stylesheet, index);
  });
  locals.add.label = locals.config.addButtonLabel ? locals.config.addButtonLabel : locals.add.label
  var addButton = locals.add
    ?  addParentButton(locals.add, stylesheet)
    : null;
  return (
    <View style={fieldsetStyle}>
      <View style={{flexDirection: 'row'}}>
        {label}
        {addButton}
      </View>
      {error}
      {rows}
    </View>
  );
}
function addParentButton(button, stylesheet) {
  const { label, click } = button
  return (
    // <Icon name ={'md-add-circle'} size={22} onPress={button.click}/>
    // <AppButton
    //   style={[{ flex: 1 }]}
    //   icon={{ name: 'add' }}
    //   size={22}
    //   onPress={click}
    //   title={label}
    // />
      <AppIcon
        name={'md-add-circle'}
        // color={'red'}
        onPress={click}
        size={metric.ICON_XS}
        containerStyle = {{
          paddingLeft: metric.MARGIN_XXS,
          paddingRight: metric.MARGIN,
          paddingVertical: 0,
        }}
        // style={{ height: metric.ICON_XS }}
      />
  );
}
module.exports = list;
