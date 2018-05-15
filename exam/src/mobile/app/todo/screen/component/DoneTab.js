//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import { todo as todoAction } from 'AppAction'
import { todo as todoReselect } from 'AppReselect';


import { getFinishedTodos } from '../../logic/redux/reselect.js';
import TodoBase from './TodoBase'
import { compareListByStatus } from './helper'


const mapStateToProps = (state, props) => {
  return {
    todo: todoReselect.getFinishedTodo(state, props),
    disableRightIcon: true,
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  submitTodo: (name) => dispatch(todoAction.addMoreData([{name, status: 'done' }])),
  onPressButtonRight: (task) => dispatch(todoAction.removeTask(task)),
  onPressRemoveButton: (task) => dispatch(todoAction.removeTask(task)),

})
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps, null)(TodoBase)
