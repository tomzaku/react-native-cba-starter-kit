import moment from 'moment'
import reducer from './reducer'
import * as action from './action'
import type from './type'

export const options = {
  reducer,
  action,
  getAll: () => {
    return new Promise(
      (resolve, reject) => {
        const serverData = [
          {
            id: '1',
            name: 'Play game',
            status: 'to-do',
          },
          {
            id: '2',
            name: 'Hang out my friends',
            status: 'to-do',
          },
          {
            id: '3',
            name: 'Add dare request',
            status: 'doing',
          },
          {
            id: '4', 
            name: 'Add dare pending',
            status: 'done',
          },
        ]
        resolve(serverData);
        }
    );
  },
  addMore: (data) => {
    return new Promise(
      (resolve, reject) => {
        
        setTimeout(() => {
          resolve(data);
        }, 2000)
        }
    );
  },
  schemaOptions: {
    idAttribute: 'id',
  }
}
export default {
  type,
  options
}