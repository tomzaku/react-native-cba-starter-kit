//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Todo</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000',
  },
});

//make this component available to the app
export default Todo;
