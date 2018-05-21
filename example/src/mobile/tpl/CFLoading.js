/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { metric } from 'AppTheme';
import * as Animatable from 'react-native-animatable';
import { CFLogo } from 'AppComponent';

export default class CFLoading extends Component {
  render() {
    const { color, styleContainer } = this.props;
    return (
      <View style={[styles.container, styleContainer]}>
        {/* <Animatable.View
          ref={view => (this.view = view)}
          animation={'flipInY'}
          iterationCount={'infinite'}
          duration={600}
          easing={'ease-in-circ'}
        > */}
          <CFLogo />
        {/* </Animatable.View> */}
        <Text style={[styles.text, { color }]}>
          Wait a moment...
        </Text>
      </View>
    );
  }
  // componentWillMount(){
  //   this.view.bounceIn(1500).then((endState) => {
  //     console.log(endState.finished ? 'bounce finished' : 'bounce cancelled');
  //   })
  // }

  // componentWillUnmount() {
  //   this.view.flipOutY();
  // }

  // componentDidMount() {
  //   setTimeout(() => (this.view
  //     ? this.view.pulse(1500).then((endState) => {
  //       console.log(endState.finished
  //         ? 'bounce finished'
  //         : 'bounce cancelled');
  //     })
  //     : null),
  //     600);
  // }
}

CFLoading.propTypes = {
  color: PropTypes.any,
  styleContainer: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: metric.MARGIN,
    backgroundColor: 'transparent',
    color: 'black',
  },
});
