import * as R from 'ramda'

const removeUndefined = <T extends {[N in keyof T]: T[N] | undefined}> (obj: T) => {
	const notNil = R.compose(R.not, R.isNil)
	return R.filter(notNil, obj)
}

export default {
	removeUndefined,
}
