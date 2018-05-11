//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { color, metric, applicationStyle } from 'AppTheme';

// create a component
class FormLabel extends PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <Text {...this.props} style={styles.text}>{title || children}</Text>
    );
  }
}

// FormLabel.defaultProps = {
//   title: 
// }

// define your styles
const styles = StyleSheet.create({
  text: {
    marginLeft: metric.MARGIN,
    marginRight: metric.MARGIN,
    marginTop: metric.MARGIN,
    ...applicationStyle.title,
    // fontWeight: 'bold',
    // ...Platform.select({
    //   ios: {
    //     // fontWeight: 'bold',
    //   },
    //   android: {
    //     fontFamily: 'Roboto-Bold',
    //   },
    // }),
  },
});

//make this component available to the app
export default FormLabel;
