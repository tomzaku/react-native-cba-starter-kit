import actionTypes from './actionType';

const {
  SWITCH_THEME,
  CHANGE_LANGUAGE,
} = actionTypes;

export const switchTheme = () => ({
  type: SWITCH_THEME,
})

export const changeLanguage = (code) => ({
  type: CHANGE_LANGUAGE,
  code,
})
