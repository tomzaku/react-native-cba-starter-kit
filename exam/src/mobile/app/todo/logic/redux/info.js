import moment from 'moment'
const type = 'todo'

const options = {
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