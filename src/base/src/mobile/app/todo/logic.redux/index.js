import { reduxFactory } from '@util/redux/list/index'

import info from "./info";
import * as reselect from './reselect';

const redux = reduxFactory(info)
const action = redux.action

export {
  action,
  reselect,
}
export default redux