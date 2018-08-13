import { from, ImmutableObject } from 'seamless-immutable'

export const initialState = from({
	isAuthenticated: false,
})


export interface TAuthenticationState {
	isAuthenticated: boolean
}
