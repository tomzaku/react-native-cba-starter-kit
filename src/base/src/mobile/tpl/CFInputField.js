/* @flow */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from 'react-native-elements';
import { metric } from 'AppTheme';

class CFInputField extends PureComponent {
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
            // console.log(">>>",this.refs);
            // this.refs.underline.expandLine();
            this.setState({ isFocus: true });
          }}
          onBlur={() => {
            // this.refs.underline.shrinkLine();
            this.setState({ isFocus: false });
          }}
          {...this.props}
          // style={{color:'rgb(42, 42, 42)'}}
          // placeholderTextColor={'rgb(187, 187, 187)'}
          // value={"sad"}
        />
      </View>
    );
  }
}

CFInputField.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.any,
};

CFInputField.defaultProps = {
  autoFocus: false,
  label: 'Label',
};

export default CFInputField;
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
