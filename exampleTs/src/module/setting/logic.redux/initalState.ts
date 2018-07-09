import { from, ImmutableObject } from 'seamless-immutable'
export type TTheme = 'light' | 'dark'

interface IAppState {
	theme: {
		paletteType: TTheme,
	},
	lang: string
}

export type TAppState = ImmutableObject<IAppState>

export const initialState: TAppState = from({
  theme: {
	paletteType: 'light' as TTheme,
  },
  lang: 'en',
})
