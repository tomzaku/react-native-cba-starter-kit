//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { todo } from 'AppAction'

import TodoTab from './component/TodoTab';
// import DoingTab from './component/DoingTab';
// import DoneTab from './component/DoneTab';

// create a component
class TodoScreen extends Component {
  componentDidMount = () => {
    this.props.getData()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView>
          <TodoTab tabLabel="To-do" />
          {/* <DoingTab tabLabel="Doing" />
          <DoneTab tabLabel="Done" /> */}
          {/* <View/> */}
        </ScrollableTabView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


//make this component available to the app
const mapDispatch = (dispatch, props) => ({
  getData: () => dispatch(todo.getInitialData()),
})
export default connect(null, mapDispatch)(TodoScreen)