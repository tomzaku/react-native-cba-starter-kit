/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { metric, color, applicationStyle, font, image as imageResource} from 'AppTheme';

class CFEmpty extends Component {
  render() {
    let { text, image } = this.props;
    return (
      <View style={styles.container}>
        <Image source={image} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

CFEmpty.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
};

CFEmpty.defaultProps = {
  text: 'This content is empty',
  image: imageResource.empty,
};

export default CFEmpty;

const styles = StyleSheet.create({
  container: {
    ...applicationStyle.mainCon,
    ...applicationStyle.center,
  },
  text: {
    marginTop: metric.MARGIN,
  },
});
