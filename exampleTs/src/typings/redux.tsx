type ReducerAction<T extends {type: string, payload?: any}> = T | {type: undefined}

export {
	ReducerAction,
}
