import { CFFormLabel, CFFormInput } from 'AppComponent';
import { color, metric, font, applicationStyle } from 'AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import React from 'react';
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native';

// import StyleTcomb from './styles';

function textbox(locals) {
  if (locals.hidden) {
    return null;
  }

  const stylesheet = locals.stylesheet;
  let formGroupStyle = stylesheet.formGroup.normal;
  // stylesheet.textboxView.normal = {
  //   ...stylesheet.textboxView.normal,
  //   // backgroundColor: 'red',
  //   marginLeft: metric.MARGIN,
  //   marginRight: metric.MARGIN,
  //   ...Platform.select({
  //     ios: {
  //       borderBottomColor: 'rgb(143, 143, 143)',
  //       borderBottomWidth: 1,
  //     },
  //     android: {
  //       borderBottomColor: 'rgb(143, 143, 143)',
  //       borderBottomWidth: 1,
  //     },
  //   }),
  // };
  let textboxViewStyle = stylesheet.textboxView.normal;
  let helpBlockStyle = stylesheet.helpBlock.normal;
  const errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    // controlLabelStyle = stylesheet.controlLabel.error;
    textboxViewStyle = stylesheet.textboxView.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  if (locals.editable === false) {
    textboxViewStyle = stylesheet.textboxView.notEditable;
  }

  const help = locals.help
    ? <Text style={helpBlockStyle}>{locals.help}</Text>
    : null;
  const error = locals.hasError && locals.error
    ? <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>{locals.error}</Text>
    : null;
  // console.log('?LOCAL', locals);
  return (
    <View style={formGroupStyle}>
      {/* {label} */}
      {stylesheet.titleHeader
      ? <View style={styles.header}>
        {stylesheet.iconTitle
          ? (
            <Icon
              name={stylesheet.iconTitle}
              color={'white'}
              size={20}
            />
            )
          : (
            <Text style={styles.textInteadIcon}>
              {stylesheet.titleHeader[0]}
            </Text>
            )
          }
        <Text style={styles.titleHeader}>{stylesheet.titleHeader}</Text>
      </View>
      : null
      }
      {/* <FormLabel labelStyle={styles.formLabel}>{locals.label}</FormLabel> */}
      <CFFormLabel>
        {locals.label.toUpperCase()}
      </CFFormLabel>
      <CFFormInput {...locals} onChangeText={locals.onChange} />
      {/* <View style={textboxViewStyle}>
        <TextInput {...locals} style={{ height: 35 }} />
      </View> */}
      {help}
      {error}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: color.NAV_HEADER,
    paddingTop: metric.MARGIN_XXS ,
    paddingBottom: metric.MARGIN_XXS,
    paddingLeft: metric.MARGIN,
    paddingRight: metric.MARGIN,
    alignItems: 'center',
  },
  titleHeader: {
    flex: 1,
    color: 'white',
    ...applicationStyle.txtHl,
    marginLeft: metric.MARGIN,

  },
});

module.exports = textbox;
