import Immutable from 'seamless-immutable'

import actionTypes from './actionType';

const {
  SWITCH_THEME,
  CHANGE_LANGUAGE,
} = actionTypes;

const initialState = Immutable({
  theme: 'light',
  language: 'en',
})

const reducer = (state= initialState, action) => {
  switch(action.type) {
    case SWITCH_THEME: {
      return state.set('theme', state.theme == 'light' ? 'dark' : 'light')
    }
    case CHANGE_LANGUAGE: {
      if (state.language === action.code) return state;
      return state.set('language', action.code)
    }
    default: {
      return state;
    }
  }
}
export default reducer