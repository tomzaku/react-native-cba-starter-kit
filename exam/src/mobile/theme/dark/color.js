const monochromatic = [
  // '#00158b',
  '#00305A',
  // '#004B8D',
  '#0277BD',
  // '#0074D9',
  // '#4192D9',
  // '#7ABAF2',
  '#03A9F4',
]

// const complementary = [
//   '#F48603',
//   '#BD6E02',
// ]
const complementary = [
  '#D98602',
  '#BD7502',
]

const boostrapColor = {
  warning: '#EEA345',
  error: '#de0317',
  success: '#33691e',
  danger: '#de0317',
  info: '#0277BD',
  primary: '#03A9F4',

}
const commonColor = {
  // dark: '#000',
  // light: '#fff',
  gray: ['#000000', '#333333', '#616161', '#D0D0D0', '#FFFFFF'].reverse()
}

const primaryPalette = {
  monochromatic,
  complementary,
  boostrapColor,
  commonColor,
}

const nightMonochromatic = ['#000829', '#010A4B', '#04198D']
const nightCommonColor = {
  // dark: '#000',
  // light: '#fff',
  gray: ['#000000', '#333333', '#616161', '#D0D0D0', '#FFFFFF']
}

const darkPrimaryPalette = {
  monochromatic: nightMonochromatic,
  complementary,
  boostrapColor,
  commonColor: nightCommonColor,
}

const getPrimaryColor = (palette) => {
  return {

    // ─── SCREEN ──────────────────────────────────────────────────────
    BACKGROUND: palette.commonColor.gray[4],
    BACKGROUND1: palette.monochromatic[0],
    CONTAIN_ITEM_BACKGROUND: palette.commonColor.gray[3],
    TRANSPARENT: 'rgba(0,0,0,0)',
    
    //STATUS
    STATUSBAR: palette.monochromatic[0],

    // HEADER
    BIG_HEADER: palette.monochromatic[2],
    NAV_HEADER: palette.monochromatic[1],

    // NAV_BOTTOM_TABBAR: palette.monochromatic[1],
    NAV_BOTTOM_TABBAR: palette.commonColor.gray[4],
    BOTTOM_TABBAR_LABEL: palette.commonColor.gray[4],
    // BOTTOM_TABBAR_ICON: palette.commonColor.gray[3],
    BOTTOM_TABBAR_ICON: palette.commonColor.gray[2],
    // BOTTOM_TABBAR_ICON_SELECTED: palette.commonColor.gray[4],
    BOTTOM_TABBAR_ICON_SELECTED: palette.monochromatic[1],
  
    // AVATAR IMAGE LOGO
    AVATAR_BORDER: palette.commonColor.gray[4],
    AVATAR: palette.monochromatic[0],
  

    // TEXT
    TITLE: palette.commonColor.gray[0], //black
    TITLE_COLOR: palette.monochromatic[1], //Have color on title
    TITLE_HIGHLIGH: palette.commonColor.gray[4], // white
    SUBTITLE: palette.commonColor.gray[3],
    SUBTITLE_HIGHLIGH: palette.commonColor.gray[4],
    DESCRIPTION: palette.commonColor.gray[2],
  
    // MESSAGE
    MESSAGE_YOU: palette.monochromatic[0],
    MESSAGE_ME: palette.complementary[0],
    
    // CARD
    CARD: palette.commonColor.gray[4],
    CARD_SELECTED: palette.monochromatic[0],

    // Spinner
    SPINNER: palette.monochromatic[1],
  
    // SWITCH
    SWITCH: palette.monochromatic[1],
  
    // Search
    SEARCH_BAR: palette.monochromatic[1],
  
    // BUTTON 
    BUTTON: palette.monochromatic[1],
  
    // TAB
    TAB_UNDERLINE: palette.commonColor.gray[4],
    // TAB_UNDERLINE: palette.complementary[1],
    TAB: palette.monochromatic[2],
    TAB_TITLE: palette.commonColor.gray[3],
    // TAB_TITLE: palette.complementary[0],
    TAB_TITLE_SELECTED: palette.commonColor.gray[4],
    // TAB_TITLE_SELECTED: palette.complementary[1],

    // ICON
    ICON: palette.monochromatic[1],
    ICON_HIGHLIGHT: palette.commonColor.gray[4],
    ICON_DESCRIPTION: palette.commonColor.gray[2],

    // FAB
    FAB: palette.monochromatic[1],

    // LINE
    LINE_BORDER: palette.commonColor.gray[3],

    // SEGMENT
    SEGMENT: palette.monochromatic[0],
    SEGMENT_TEXT: palette.monochromatic[1],
    SEGMENT_SELECTED: palette.commonColor.gray[4],
    SEGMENT_TEXT_SELECTED: palette.monochromatic[0],

    // SWIPE CARD
    CARD_SWIPE: palette.monochromatic[0],

    // PROGRESS
    PROGRESS: palette.monochromatic[0],
    PROGRESS_HIGHLIGH: palette.complementary[0],

    // INPUT
    INPUT_TEXT: palette.commonColor.gray[4],
    INPUT_BORDER: palette.monochromatic[3],
    INPUT_BACKGROUND: palette.commonColor.gray[4],
    
  }
}

const colors = {
  ...boostrapColor,
  // ...getPrimaryColor(primaryPalette),
  ...getPrimaryColor(darkPrimaryPalette),

}
export default colors
