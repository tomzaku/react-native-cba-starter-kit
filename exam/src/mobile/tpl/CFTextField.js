/* @flow */

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeColor, ThemeSpacing } from 'AppTheme';

export default class CFTextField extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value,
    };
  }

  render() {
    const { title, style, onChangeText, value } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
        <TextInput style={styles.value} onChangeText={onChangeText} value={value} textAlign={'right'} />
      </View>
    );
  }
}

CFTextField.propTypes = {
  title: PropTypes.string,
  style: PropTypes.any,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: ThemeColor.TEXT_SUBTITLE,
    borderWidth: 1,
    borderRadius: 4,
    padding: metric.MARGIN_XXS,
  },
  title: {
    fontSize: ThemeSpacing.FONT_SIZE_L,
    color: ThemeColor.TEXT_SUBTITLE,
  },
  value: {
    height: 40,
    flex: 1,
    fontSize: ThemeSpacing.FONT_SIZE_L,
  },
});
