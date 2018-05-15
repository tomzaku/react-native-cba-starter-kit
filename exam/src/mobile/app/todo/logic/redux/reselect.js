
import { createSelector } from 'reselect'
import logger from 'react-consola';

const getTodoList = (state, props) =>
  state.todo.result
const getLocalTodo = (state, props) => state.todo.local
// const getTodoList = (state, props) =>
//   state.todoLists[props.listId].todo

const getTodoEntity = (state, props) => 
  state.todo.entities.data

export const getNewTodo = createSelector(
  getTodoList,
  getLocalTodo,
  getTodoEntity,
  (todo, localTodo, entitiesData) => {
    const mergeTodo = todo.concat(localTodo)
    return mergeTodo.filter(id => entitiesData[id].status === 'to-do' && !entitiesData[id].locked)
  }
)
const getItem = (state, props) => state.todo.entities.data[props.id]
const getId = (state, props) => props.id
export const getItemSelector = createSelector(
  getItem,
  getLocalTodo,
  getId,
  (item, localTodo, id) => ({
    item: item,
    isLocal: localTodo.includes(id),
  })
)
export const getInProgressTodo = createSelector(
  getTodoList,
  getLocalTodo,
  getTodoEntity,
  (todo, localTodo, entitiesData) => {
    const mergeTodo = todo.concat(localTodo)
    return mergeTodo.filter(id => entitiesData[id].status === 'doing' && !entitiesData[id].locked)
  }
)

export const getFinishedTodo = createSelector(
  getTodoList,
  getLocalTodo,
  getTodoEntity,
  (todo, localTodo, entitiesData) => {
    const mergeTodo = todo.concat(localTodo)
    return mergeTodo.filter(id => entitiesData[id].status === 'done' && !entitiesData[id].locked)
  }
)

export const makeGetNewTodo = () => {
  return getNewTodo
}