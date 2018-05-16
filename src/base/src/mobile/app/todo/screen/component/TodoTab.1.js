//import liraries
import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
// import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux'


import { IconTextInput, Button, Icon } from 'AppComponent'
import { application } from 'AppAction'
import { metric, color, applicationStyle, font } from "ThemeNewMeta";

import { makeGetNewTodos } from '../../logic/redux/reselect.js';
import TodoBase from './TodoBase'
import R from 'ramda'
import { compareListByStatus } from './helper'

const mapStateToProps = (state, props) => {
  return {
    todos: getNewTodos(state, props)
  }
}
const makeMapStateToProps = () => {
  const getNewTodos = makeGetNewTodos()
  const mapStateToProps = (state, props) => {
    return {
      todos: getNewTodos(state, props)
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = (dispatch, props) => ({
  submitTodo: (name) => dispatch(application.addTask(name, 'to-do')),
  onPressButtonRight: (task) => dispatch(application.moveAnotherList(task, 'doing')),
  onPressRemoveButton: (task) => dispatch(application.removeTask(task)),
})
//make this component available to the app
export default connect(makeMapStateToProps, mapDispatchToProps, null, {
  areStatesEqual: (next, prev) => {
    return (
      next.application.todo === prev.application.todo || 
      compareListByStatus(next,prev)('to-do')
    )
  }
})(TodoBase);
