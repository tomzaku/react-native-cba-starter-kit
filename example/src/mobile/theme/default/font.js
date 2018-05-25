import { em } from './unit'
import { Dimensions, Platform, StatusBar } from 'react-native'

const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_XXXS: em(0.25),
  FONT_SIZE_XXS: em(0.5),
  FONT_SIZE_XS: em(0.75),
  FONT_SIZE_S: em(0.875),
  FONT_SIZE_L: em(1.15),
  FONT_SIZE_XL: em(1.25),
  FONT_SIZE_XXL: em(1.5),
  FONT_SIZE_XXXL: em(2),
  FONT_SIZE_XXXXL: em(2.5),

  FONT_WEIGHT_DESC: '300',
  FONT_WEIGHT_TITLE: '500',
}

const style = {
  h1: {
    fontWeight: 'bold',
    // fontFamily: type.base,
    fontSize: size.FONT_SIZE_XXXXL
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.FONT_SIZE_XXXXL
  },
  h3: { 
    fontWeight: 'bold',
    // fontFamily: type.emphasis,
    fontSize: size.FONT_SIZE_XXXL
  },
  h4: {
    fontWeight: 'bold',
    // fontFamily: type.base,
    fontSize: size.FONT_SIZE_XXL
  },
  h5: {
    fontWeight: 'bold',
    // fontFamily: type.base,
    fontSize: size.FONT_SIZE_XL
  },
  h6: {
    // fontFamily: type.emphasis,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '400',
      }
    }),
    fontSize: size.FONT_SIZE_L
  },
  normal: {
    // fontFamily: type.base,
    fontSize: size.FONT_SIZE,
    fontWeight: '300',

  },
  desc: {
    // fontFamily: type.base,
    fontSize: size.FONT_SIZE_S,
    // fontStyle: 'italic',
    fontWeight: '400',
  }
}

export default {
  type,
  size,
  style
}
