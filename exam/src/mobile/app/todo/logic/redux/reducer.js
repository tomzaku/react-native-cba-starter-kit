import ActionTypes from './actionType'
const {
  CHANGE_STATUS
} = ActionTypes;

const getNextStatus = (status) => {
  switch(status) {
    case 'to-do': {
      return 'doing'
    }
    case 'doing': {
      return 'done'
    }
    case 'done': {
      return 'done'
    }
    default:
      return null
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      const nextStatus = getNextStatus(state.entities.data[action.id].status)
      return state.setIn(['entities', 'data', action.id, 'status'], nextStatus)
    }
    default: 
      return state
  }
}
export default reducer;