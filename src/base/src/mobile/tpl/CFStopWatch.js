//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class StopWatch extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>StopWatch</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default StopWatch;
