//import liraries
import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class AppText extends PureComponent {
  render() {
    const { style } = this.props;
    return (
      <Text {...this.props} style={style} >{this.props.children}</Text>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default AppText;
