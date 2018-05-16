import R from 'ramda'

const compare = status => {
  return function(item) {
    return item.status === status && !item.locked;
  };
};
const filterByStatus = (data, status) => {
  return R.filter(compare(status))(data);
};

export const compareListByStatus = (next, prev) => {
  return function(status) {
    return filterByStatus(next.application.todo, status).length === filterByStatus(prev.application.todo, status).length 
  }
}