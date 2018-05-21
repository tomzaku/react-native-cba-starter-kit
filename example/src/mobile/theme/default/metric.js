import { Dimensions, Platform, StatusBar } from 'react-native'
import { em } from './unit';
const { width, height } = Dimensions.get('window')

const statusBarHeight = StatusBar.currentHeight !== undefined
  ? StatusBar.currentHeight
  : 20;

// Used via Metrics.baseMargin

const metrics = {

  // ─── MARGIN ─────────────────────────────────────────────────────────────────────
  MARGIN: em(1),
  MARGIN_XXXL: em(2),
  MARGIN_L: em(1.25),
  MARGIN_XL: em(1.5),
  MARGIN_XXL: em(1.75),
  MARGIN_S: em(0.75),
  MARGIN_XS: em(0.5),
  MARGIN_XXS: em(0.25),
  MARGIN_XXXS: em(0.125),
  
  // ─── DEVICE ─────────────────────────────────────────────────────────────────────
  DEVICE_WIDTH:  width < height ? width : height,
  DEVICE_HEIGHT: width < height ? height : width,

  // ─── BORDER WIDTH ───────────────────────────────────────────────────────────────
  BORDER_S: 0.7,
  BORDER: 1,
  BORDER_L: 2,
  BORDER_XL: 4,
  BORDER_XXL: 6,

  // ─── BORDER RADIUS ──────────────────────────────────────────────────────────────
  BORDER_RADIUS: 1,
  BORDER_RADIUS_L: 4,
  BORDER_RADIUS_XL: 6,
  
  // ─── ELEVATION ──────────────────────────────────────────────────────────────────
  ELEVATION: 2,

  // ─── STATUSBAR ──────────────────────────────────────────────────────────────────
  STATUS_BAR_HEIGHT: statusBarHeight,

  // ─── LOGO AVATAR IMAGE ──────────────────────────────────────────────────────────
  LOGO_HEIGHT: em(6),
  LOGO_WIDTH: em(9),
  LOGO_BORDER: 99999,
  AVATAR_XS: em(2),
  AVATAR_S: em(2.5),
  AVATAR: em(3.5),
  AVATAR_PROVIDER: em(4.75),
  AVATAR_L: em(4.25),
  AVATAR_XL: em(6.25),
  AVATAR_XXL: em(7.25),

  // ─── TABBAR ─────────────────────────────────────────────────────────────────────
  TABBAR_HEIGHT: 50,

  // ─── ICON ───────────────────────────────────────────────────────────────────────
  ICON: em(1.5),
  ICON_XS: em(1),
  ICON_S: em(1.25),
  ICON_L: em(1.75),
  ICON_XL: em(2.25),

  // COVER_PROFILE
  COVER_PROFILE_HEIGHT: height * 0.2,

  // TOOLBAR
  TOOLBAR_HEIGHT: em(2.5),

  // INPUT
  INPUT_HEIGHT: em(3),

  // LINE
  LINE_HEIGHT: 2,
  LINE_HEIGHT_S: 0.5,
  LINE_HEIGHT_L: 3.5,
}
export default metrics
