import actionType from './actionType'

// export enum ActionType {
//   CHANGE_THEME,
// }

export interface IAppAction<T> {
  type: 'CHANGE_THEME',
  lang: string
}


export const changeTheme = () => {
  return {
	type: actionType.CHANGE_THEME,
  }
}

export const changeLanguage = (lang: string) => {
  return {
	lang,
	type: actionType.CHANGE_LANGUAGE,
  }
}
