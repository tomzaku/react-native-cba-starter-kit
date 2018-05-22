import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isAuthenticated: false
})
const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}
export default {
  reducer
}