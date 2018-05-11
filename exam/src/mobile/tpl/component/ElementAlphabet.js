import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { ThemeColor, ThemeSpacing } from 'AppTheme';
import styles from './style/ElementAlphabetStyle'

class ElementAlphabet extends Component {
  shouldComponentUpdate({
    isPressed,
  }, nextState) {
    if (this.props.isPressed === isPressed) { return false; }
    return true;
  }

  render() {
    const { isPressed, title, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.textItemComponent,
          isPressed
          ? styles.textItemComponentSelected
          : {}
        ]}
      >
        <Text style={[
          styles.textItem,
          isPressed
            ? styles.textItemSelected
            : {}
          ]}
        >
          {title}
        </Text>

      </TouchableOpacity>
    );
  }
}

ElementAlphabet.propTypes = {
  isPressed: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func,
};


export default ElementAlphabet;
