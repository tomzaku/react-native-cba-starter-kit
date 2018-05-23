import { createSelector } from 'reselect'

const getRelatedThing = (state, props) => 
  null
export const getSomthing = createSelector(
  getRelatedThing,
  (relatedThing) => {
    return null
  }
)