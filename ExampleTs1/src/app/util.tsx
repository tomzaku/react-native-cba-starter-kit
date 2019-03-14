import * as ramda from 'ramda'
import objectUtil from '@util/object'

function registerModule<C, RO, R>(routeConfig?: RO, component?: C, redux?: R) {
	return {
		redux,
		route: routeConfig,
		com: component,
	} as {
		redux: R extends undefined ? undefined : R,
		route: RO extends undefined ? undefined : RO,
		com: C extends undefined ? undefined : C,
	}
}

const isDuplicatedKey = (keys: string[]) => {
    for(let index= 0; index < keys.length; index++ ) {
        if (ramda.lastIndexOf(keys[index], keys) !== index) {
            throw `Key ${keys[index]} is dupplicated. Rename  ${keys[index]} to fix`
            return index
        }
    }
    return false
}

type RegisterModule<R, RO, C> = {
	redux?: R,
	route?: RO,
	com?: C,
}
// type Modules = {
// 	[key: string]: ReturnType<typeof registerModule>
// }
const getPart = <R,
				RO,
				C,
				T extends {[N in keyof T]: RegisterModule<R, RO, C > },
				K extends keyof RegisterModule < R, RO, C >
				>
	(part: K, app: T) => {
		const partModule = ramda.mapObjIndexed(module => module[part], app)
		return objectUtil.removeUndefined(partModule) as {
			[N in keyof T]: T[N] extends undefined ? never : T[N][K] extends undefined ? never : T[N][K]
		}
	}

const combine = <R, RO extends object, C, T extends {[N in keyof T]: RegisterModule<R, RO, C> }>(modules: T) => {
	const appRoute = getPart('route', modules)
	const routeCollection = ramda.values(appRoute) as {[key: string]: RegisterModule<R, RO, C>}[]
	const routeKeys = ramda.flatten(routeCollection.map(item => ramda.keys(item))) as string[]
	isDuplicatedKey(routeKeys)
	const route = ramda.mergeAll(routeCollection) as any
	const redux = getPart('redux', modules)
	const com = getPart('com', modules)
	return {
		route,
		redux,
		com
	}
}


// }
// const getRoute = (app:)

export {
	registerModule,
	combine
}