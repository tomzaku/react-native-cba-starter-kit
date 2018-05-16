//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { application } from 'AppAction'



import { getFinishedTodos } from '../../logic/redux/reselect.js';
import TodoBase from './TodoBase'
import { compareListByStatus } from './helper'


const mapStateToProps = (state, props) => {
  return {
    todos: getFinishedTodos(state, props),
    disableRightIcon: true,
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  submitTodo: (name) => dispatch(application.addTask(name, 'done')),
  onPressButtonRight: (task) => dispatch(application.removeTask(task)),
  onPressRemoveButton: (task) => dispatch(application.removeTask(task)),

})
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps, null, {
  areStatesEqual: (next, prev) => {
    return (
      next.application.todo === prev.application.todo || 
      compareListByStatus(next,prev)('done')
    )
  }
} )(TodoBase)
