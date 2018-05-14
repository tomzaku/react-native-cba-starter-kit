//import liraries
import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
// import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux'


import { IconTextInput, Button, Icon } from 'AppComponent'
import { todo as todoAction } from 'AppAction'

import { todo as todoReselect } from 'AppReselect';
import TodoBase from './TodoBase'
import R from 'ramda'
import { compareListByStatus } from './helper'

const mapStateToProps = (state, props) => {
  return {
    todo: todoReselect.getNewTodo(state, props)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  submitTodo: (name) => dispatch(todoAction.addMoreData([{name, status: 'to-do' }])),
  onPressButtonRight: (task) => dispatch(todoAction.moveAnotherList(task, 'doing')),
  onPressRemoveButton: (task) => dispatch(todoAction.removeTask(task)),
})
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps, null
)(TodoBase);
