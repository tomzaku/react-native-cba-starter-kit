//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import { todo as todoReselect } from 'AppReselect';
import TodoBase from './TodoBase'
import { application } from 'AppAction'
import { compareListByStatus } from './helper'


const mapStateToProps = (state, props) => {
  return {
    todos: todoReselect.getInProgressTodo(state, props)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  submitTodo: (name) => dispatch(application.addTask(name, 'doing')),
  onPressButtonRight: (task) => dispatch(application.moveAnotherList(task, 'done')),
  onPressRemoveButton: (task) => dispatch(application.removeTask(task)),

})
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps, null, {
  areStatesEqual: (next, prev) => {
    return (
      next.application.todo === prev.application.todo || 
      compareListByStatus(next,prev)('doing')
    )
  }
})(TodoBase)
