/* @flow */

import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color, metric, font,  } from 'AppTheme';
// import { FormLabel } from 'react-native-elements';
import { CFFormLabel, CFFormInput, CFButton } from 'AppComponent';
// import TextBoxCustmization from './TextboxCustomization'

import StyleTcomb from './styles';

function addParentButton(button, stylesheet) {
  return (
    // <Icon name ={'md-add-circle'} size={22} onPress={button.click}/>
    <CFButton
      style={[{ flex: 1 }]}
      icon={{ name: 'add' }}
      size={22}
      onPress={button.click}
      title={'ADD NEW'}
    />
  );
}

function renderRowWithoutButtons(item) {
  return <View key={`row-${item.key}`}>{item.input}</View>;
}

function renderRowButtonCustomize(button, stylesheet, style) {
  switch (button.type) {
    case 'remove': return (
      <Icon
        name={'delete-forever'}
        size={20}
        key={button.type}
        style={{ marginTop: 12 }}
        color={color.error}
        onPress={button.click}
      />
    );
    default: return null;
  }
}

class Textbox extends React.Component {
  render() {
    const { item, index, stylesheet } = this.props;
    item.input.props.ctx.label = `${item.input.props.ctx.label.split('[')[0]} ${index + 1}`.toUpperCase();
    for (let index = 0; index < item.input.length; index += 1) {
      item.input[index].props.ctx.label = item.input[index].props.ctx.label.toUpperCase();
    }
    return (
      <View style={styles.rowChildContainer}>
        <View style={{ flex: 1 }}>
          {item.input}
          {/* {TextBoxCustmization(item.input.props.ctx)} */}
        </View>
        {renderButtonGroup(item.buttons, stylesheet)}
      </View>
    );
  }
}

Textbox.propTypes = {
  stylesheet: PropTypes.object,
  item: PropTypes.object,
  index: PropTypes.number,
};

function renderButtonGroup(buttons, stylesheet) {
  return (
    <View style={{ flexDirection: 'row', position: 'absolute', right: metric.MARGIN }}>
      {buttons.map((button, index) =>
        renderRowButtonCustomize(button, stylesheet, { width: 50 }, index))
      }
    </View>
  );
}

function ListCustomization(locals) {
  let stylesheet = locals.stylesheet;
  stylesheet.textbox.normal = {
    // ...stylesheet.textbox.normal,
    ...StyleTcomb.textbox.normal,
  };
  // stylesheet.formGroup.normal = {
  //   // backgroundColor: 'red',
  //   paddingBottom: metric.MARGIN,
  //   borderBottomColor: ThemeColor.BORDER_LINE,
  //   borderBottomWidth: 1,
  // };
  stylesheet.textboxView.normal = {
    ...StyleTcomb.textboxView.normal,
  };
  stylesheet.controlLabel.normal = {
    ...StyleTcomb.controlLabel.normal,
  };

  const addButton = locals.add
    ? addParentButton(locals.add, stylesheet)
    : null;
  const rows = locals.items.map((item, index) => (item.buttons.length === 0
    ? renderRowWithoutButtons(item)
    : <Textbox item={item} stylesheet={stylesheet} index={index} key={`${item.key}-row-${item.input.props.ctx.label}`} />
  ));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* {label} */}
        <CFFormLabel>
          {locals.label}
        </CFFormLabel>
        {/* {error} */}
      </View>
      {/* <CFLine/> */}
      <View style={styles.body}>
        <View style={[stylesheet.row, { marginBottom: 6 }]}>
          {rows}
        </View>
        {addButton}
      </View>
    </View>
  );
}

export default ListCustomization;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowChildContainer: {
    marginBottom: metric.MARGIN_S,
    position: 'relative',
    backgroundColor: '#fdfdfd',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'rgba(201, 201, 201, 0.7)',

  },
  body: {
    marginTop: 6,
    marginLeft: metric.MARGIN,
    marginRight: metric.MARGIN,
  },
});
