
import { createSelector } from 'reselect'

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
    todo.concat(localTodo)
    return todo.filter(id => entitiesData[id].status === 'to-do' && !entitiesData[id].locked)
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
  [ getTodoList ],
  (todo) => {
    return todo.filter(todo => todo.status === 'doing' && !todo.locked)
  }
)

export const getFinishedTodo = createSelector(
  [ getTodoList ],
  (todo) => {
    return todo.filter(todo => todo.status === 'done' && !todo.locked)
  }
)

export const makeGetNewTodo = () => {
  return getNewTodo
}