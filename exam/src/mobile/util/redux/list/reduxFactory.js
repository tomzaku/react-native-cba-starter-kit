import { actionFactory, reducerFactory, sagaFactory } from './index'
const reduxFactory = (info) => {
  const { type, options } = info;
  return {
    action: actionFactory(type, options),
    reducer: reducerFactory(type, options),
    saga: sagaFactory(type, options),
  }
}

export default reduxFactory