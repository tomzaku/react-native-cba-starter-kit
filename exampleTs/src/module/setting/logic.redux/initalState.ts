import { from, ImmutableObject } from 'seamless-immutable'
export type TPaletteType = 'light' | 'dark'

interface IAppState {
	theme: {
		paletteType: TPaletteType,
	},
	lang: string
}

export type TAppState = ImmutableObject<IAppState>

export const initialState: TAppState = from({
  theme: {
	paletteType: 'light' as TPaletteType,
  },
  lang: 'en',
})
