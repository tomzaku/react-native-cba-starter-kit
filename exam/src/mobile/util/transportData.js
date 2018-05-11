import { generateNameByCamelCase } from "./redux/name";

export const getNewestGate = (redux, relay, updateRedux) => {
  if (relay && relay.data){
    if(relay.updatedDate > redux.updatedDate  || !redux.updatedDate) {
      // Combine data from another page
      if(redux.page < relay.page) {
        combineData = redux.data.concat(relay.data)
        updateRedux(combineData, relay.page)
        return combineData
      }
      // Get new data
      updateRedux(relay.data, relay.page)
      return relay.data
    }
    return redux.data
  }  
  return redux.data
}
export const dataGate = (state, ownProps, updateDataRedux, nameField, nameQuery) => {
  const { query, page, relayDate, dispatch } = ownProps
  const { camelCaseAllObject } = generateNameByCamelCase(nameField)

  const reduxData = state[nameField].get(camelCaseAllObject).toJS();
  const relayData = {
    page,
    updatedDate: relayDate,
    data: query && query[nameQuery]
  }
  const updateRedux = (data, page) => {
    dispatch(updateDataRedux(data,page))
  }
  const dataPass = getNewestGate(reduxData, relayData, updateRedux)
  return dataPass
}

export const getNewestDataSingle = (redux, relay, navigator, updateRedux) => {
  if (relay && relay.data ){
    if(relay.updatedDate > redux.updatedDate || !redux.updatedDate){
      updateRedux(relay.data)
      return relay.data
    }
    return redux.data
  } else {
    if(redux.updatedDate > navigator.updatedDate || !navigator.data){

      return redux.data
    }
    return navigator.data
  }
}

export const dataGateSingle = (state, ownProps, updateDataRedux, nameField, nameQuery) => {
  const { query, dispatch, relayDate, data, navigationParamsDate } = ownProps;
  const { camelCaseWorkingObject } = generateNameByCamelCase(nameField)
  const reduxData = state[nameField].get(camelCaseWorkingObject).toJS()
  const relayData = {
    data: query && query[nameQuery],
    updatedDate: relayDate,
  }
  const navigationData = {
    data,
    updatedDate: navigationParamsDate,
  }
  const updateRedux = (data) => {
    dispatch(updateDataRedux(data))
  }
  const dataPass = getNewestDataSingle(reduxData, relayData, navigationData, updateRedux)
  return dataPass
}