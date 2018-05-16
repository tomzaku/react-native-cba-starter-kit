import * as dark from './dark/'
import * as light from './default/'
const getTheme = (theme) => {
  switch(theme) {
    case 'dark': return dark;
    default: return light;
  }
}