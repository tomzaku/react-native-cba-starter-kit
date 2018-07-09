import * as R from 'ramda'
import { from } from 'seamless-immutable'

// is this object already Immutable?
const isImmutable = R.has('asMutable')

// change this Immutable object into a JS object
const convertToJs = (state: any) => state.asMutable({ deep: true })

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs)

// convert this JS object into an Immutable object
const toImmutable = (raw: any) => from(raw)

// the transform interface that redux-persist is expecting
export const transformPersist =  {
  out: (state: any) => {
	// console.log({ retrieving: state })
	return toImmutable(state)
  },
  in: (raw: any) => {
	// console.log({ storing: raw })
	return fromImmutable(raw)
  },
}
