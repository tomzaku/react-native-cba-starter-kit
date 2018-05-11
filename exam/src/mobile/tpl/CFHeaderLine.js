//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color, metric, applicationStyle, font } from 'AppTheme';

// create a PureComponent
class CFHeaderLine extends PureComponent {
  render() {
    const { style, icon, label, textStyle, large } = this.props
    return (
      <View style={[
        styles.header,
        large ? styles.large : {},
        style,
        ]}>
        {icon
        ? (<Icon
          name={icon}
          color={'white'}
          size={20}
        />)
        : (<Text style={styles.textInteadIcon}>{label[0]}</Text>)}
        <Text style={[
          styles.labelText,
          large ? styles.largeText : {},
          ]}>
          {label}
        </Text>
      </View>
    );
  }
}
CFHeaderLine.defaultProps = {
  style: {},
  icon: 'ios-analytics-outline',
  label: 'Label'
}
// define your styles
const styles = StyleSheet.create({
  labelText: {
    color: 'white',
    paddingLeft: metric.MARGIN_S,
  },
  largeText: {
    fontSize: font.size.FONT_SIZE_XL,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: color.NAV_HEADER,
    paddingTop: metric.MARGIN_XXS + 1,
    paddingBottom: metric.MARGIN_XXS + 1,
    paddingLeft: metric.MARGIN,
    paddingRight: metric.MARGIN,
    alignItems: 'center',
  },
  large: {
    paddingTop: metric.MARGIN_XS,
    paddingBottom: metric.MARGIN_XS,
  },
  textInteadIcon: {
    ...applicationStyle.title,
    fontWeight: 'bold',
  },
});

//make this PureComponent available to the app
export default CFHeaderLine;
