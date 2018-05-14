
// import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actionType'
// import Immutable from 'seamless-immutable'
// import R from 'ramda'

// import initialState from './initialState'

// const addNewTodo = ( listTodo, tasks= []) => {
//   return listTodo.concat(Immutable([tasks]))
// }

// const findPatientIndexById = (id) => R.findIndex(R.propEq('id', id))

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       // return state.todo.concat(Immutable([action.task]))
//       return Immutable.update(state, "todo", addNewTodo, action.task);
//       // const addNewTodo = state.todo.concat(Immutable([action.task]))
//       // return state.merge({todo: addNewTodo})
//     case UPDATE_TODO: 
//       const itemFoundIndex = findPatientIndexById(action.id)(state.todo)
//       return Immutable.setIn(state, ['todo', itemFoundIndex], action.task)
//     // case DELETE_TODO:
//     case REMOVE_TODO:
//       const itemFoundIndexToRemove = findPatientIndexById(action.task.id)(state.todo)
//       return Immutable.setIn(state, ['todo', itemFoundIndexToRemove, 'locked'], true)
//     default:
//       return state;
//   }
// }
// export default reducer