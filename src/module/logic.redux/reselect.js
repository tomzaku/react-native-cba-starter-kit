import { createSelector } from 'reselect'
import logger from 'react-consola';

const getRelatedThing = (state, props) => 
  null
export const getSomthing = createSelector(
  getRelatedThing,
  (relatedThing) => {
    return null
  }
)