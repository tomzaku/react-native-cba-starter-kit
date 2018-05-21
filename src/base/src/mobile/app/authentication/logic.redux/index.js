import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isAuthenticated: true
})
const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}
export default {
  reducer
}