//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import { todo as todoAction } from 'AppAction'
import { todo as todoReselect } from 'AppReselect';


import TodoBase from './TodoBase'
import { compareListByStatus } from './helper'


const mapStateToProps = (state, props) => {
  return {
    todo: todoReselect.getFinishedTodo(state, props),
    // disableRightIcon: true,
    nextStatus: null
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  submitTodo: (name) => dispatch(todoAction.addMoreData([{name, status: 'done' }])),
  onPressButtonRight: (task) => dispatch(todoAction.changeStatus(task.id)),
  onPressRemoveButton: (task) => dispatch(todoAction.removeMoreData([task.id])),

})
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps, null)(TodoBase)
