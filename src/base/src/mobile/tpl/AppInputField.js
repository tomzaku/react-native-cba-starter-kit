/* @flow */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from 'react-native-elements';
import { metric } from 'AppTheme';

class AppInputField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: this.props.autoFocus,
    };
  }
  render() {
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <FormLabel labelStyle={styles.formLabel}>{label}</FormLabel>
        <FormInput
          containerStyle={this.state.isFocus ? styles.formInputSelected : styles.formInput}
          onFocus={() => {
            this.setState({ isFocus: true });
          }}
          onBlur={() => {
            this.setState({ isFocus: false });
          }}
          {...this.props}
        />
      </View>
    );
  }
}

AppInputField.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.any,
};

AppInputField.defaultProps = {
  autoFocus: false,
  label: 'Label',
};

export default AppInputField;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  formInputSelected: {
    marginLeft: metric.MARGIN,
    marginRight: metric.MARGIN,
    ...Platform.select({
      ios: {
        borderBottomColor: 'rgb(0, 138, 6)',
        borderBottomWidth: 1,
      },
    }),
  },
  formInput: {
    marginLeft: metric.MARGIN,
    marginRight: metric.MARGIN,
  },
  formLabel: {
    marginLeft: metric.MARGIN,
    fontSize: 13,
    color: 'rgb(65, 65, 65)',
  },
});
