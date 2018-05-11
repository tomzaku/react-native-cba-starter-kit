//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import { metric, color, applicationStyle } from 'AppTheme';

// create a component
class CFFormInput extends PureComponent {
  renderBody() {
    const { onFocus, onPress, value, isText, error, noFixHeight, textStyle } = this.props;
    if ( isText ) {
      return (
        <TouchableOpacity style={[error ? styles.errorContainerTextField : styles.containerTextField, !noFixHeight ? styles.addHeight : {}]} onPress={onPress}>
          <Text style={[error ? styles.errorTextTextField : styles.textTextField, textStyle]} >
          {value}
          </Text>
        </TouchableOpacity>
      )
     
    }
    return (
      <View style={[error ? styles.errorContainerTextField : styles.containerTextField,  !noFixHeight ? styles.addHeight : {}]} onPress={onPress}>
        <TextInput {...this.props} style={[error ? styles.errorText : styles.text, !noFixHeight ? styles.addHeight : {}, textStyle]} />
      </View>
    );
  }
  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <View>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </View>
      )
    }
  }
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderBody()}
        {this.renderError()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginLeft: metric.MARGIN,
    marginRight: metric.MARGIN,
  },
  containerTextField: {
    // ...stylesheet.textboxView.normal,
    // backgroundColor: 'red',

    ...Platform.select({
      ios: {
        borderBottomColor: 'rgb(143, 143, 143)',
        borderBottomWidth: 1,
      },
      android: {
        // borderBottomColor: 'rgb(143, 143, 143)',
        // borderBottomWidth: 1,
      },
    }),
  },
  text: {
    ...applicationStyle.txt
  },
  errorText: {
    ...applicationStyle.txt
  },
  containerTextField: {
    // alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        borderBottomColor: 'rgb(143, 143, 143)',
        borderBottomWidth: 1,
      },
      android: {
        // borderBottomColor: 'rgb(143, 143, 143)',
        // borderBottomWidth: 1,
      },
    }),
  },
  addHeight: {
    height: 45,
  },
  textTextField: {
    ...applicationStyle.txt
  },
  
  errorContainerTextField: {
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        borderBottomColor: color.error,
        borderBottomWidth: 1,
      },
      android: {
        // borderBottomColor: 'rgb(143, 143, 143)',
        // borderBottomWidth: 1,
      },
    }),
  },
  errorTextTextField: {
    color: color.error,
    fontWeight: 'bold',
  },
  errorText: {
    marginTop: metric.MARGIN_XXS,
    color: color.error,
    fontWeight: 'bold',
  }
});

//make this component available to the app
export default CFFormInput;
