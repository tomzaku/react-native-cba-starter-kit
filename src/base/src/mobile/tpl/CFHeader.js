//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color, metric, applicationStyle } from 'AppTheme';

// create a component
class CFHeader extends PureComponent {
  render() {
    const { title, icon, onPress, style } = this.props;
    return (
      <View style={[styles.header, style]}>
        <Icon
          name={icon}
          color={'white'}
          size={18}
        />
        <Text style={styles.titleHeader}>
          {title}
        </Text>
        {onPress
          ? <Icon
            name={'edit'}
            color={'white'}
            size={18}
            onPress={onPress}
          />
          : null
        }
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  titleHeader: {
    flex: 1,
    ...applicationStyle.titleHl,
    marginLeft: metric.MARGIN,
    // fontWeight: metric.FONT_WEIGHT_TITLE,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: color.NAV_HEADER,
    paddingTop: metric.MARGIN_XXS,
    paddingBottom: metric.MARGIN_XXS,
    paddingLeft: metric.MARGIN,
    paddingRight: metric.MARGIN,
  },
});

//make this component available to the app
export default CFHeader;
