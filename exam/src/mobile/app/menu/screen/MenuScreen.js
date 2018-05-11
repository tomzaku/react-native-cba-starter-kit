//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class menu extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { params } = navigation.state;
    
  //   return {
  //     title: 'menu',
  //   }
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text>menu</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{color: 'white'}}>Move to LoginScreen</Text>
        </TouchableOpacity>
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
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default menu;
