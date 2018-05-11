import Immutable from 'seamless-immutable'

export const createInitialState = () => {
  return Immutable({
    entities: {
      data: {
      }
    },
    result: [],
    selectedId: '',

    // Restful Handling for server
    isFetching: false, //Check if client using restful 
    ok: true, //Check status 
    message: '', //problem in apisauce
    showAlert: false,
  })
}
export default createInitialState