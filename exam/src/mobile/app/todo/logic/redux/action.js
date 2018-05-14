// import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actionType';
// import  {v1 as uuidv1 } from 'uuid';

// export const addTask = (name = '', status='to-do') => {
//   console.log('Add todo', name, status)
//   return {
//     type: ADD_TODO,
//     task: {
//       name,
//       status,
//       date: new Date(),
//       id: uuidv1()
//     }
//   }
// }

// export const moveAnotherList = (task, status='') => {
//   return {
//     type: UPDATE_TODO,
//     id: task.id,
//     task: {
//       ...task,
//       status,
//       date: new Date(),
//     }
//   }
// }

// export const removeTask = (task) => {
//   return {
//     type: REMOVE_TODO,
//     task
//   }
// }