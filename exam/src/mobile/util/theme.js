import * as dark from '../theme/dark'
import * as light from '../theme/default'
export const getStyle = (getLocalStyle, theme) => {
  switch(theme) {
    case 'dark': {
      return getLocalStyle(dark)
    } 
    default: {
      return getLocalStyle(light)
    }
  }
}