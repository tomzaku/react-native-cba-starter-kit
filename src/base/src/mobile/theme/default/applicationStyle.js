import { Dimensions, Platform, StatusBar } from 'react-native'

import font from './font'
import metric from './metric'
import color from './color'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  
  // ─── SCREEN ─────────────────────────────────────────────────────────────────────
  // main container
  mainCon: {
    flex: 1,
    backgroundColor: color.BACKGROUND
  },
  // exist listing items
  mainContainCon: {
    flex: 1,
    backgroundColor: color.CONTAIN_ITEM_BACKGROUND
  },
  // For screen need pading
  con: {
    flex: 1,
    padding: metric.MARGIN_S
  },

  // ─── PROTOTIES ──────────────────────────────────────────────────────────────────
  center: {
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: 'center',
  },

  // ─── NAV ────────────────────────────────────────────────────────────────────────
  navHeader: {
    backgroundColor: color.NAV_HEADER,
    height: metric.TABBAR_HEIGHT,
    elevation: 0,
    justifyContent: "center",
    // alignItems: "center",
  },
  
  // ─── IMAGE ──────────────────────────────────────────────────────────────────────
  avatar: {
    borderColor: color.AVATAR_BORDER,
    borderWidth: metric.BORDER_RADIUS,
    backgroundColor: Platform.OS === "ios" ? color.AVATAR : "transparent"
  },

  // ─── TEXT ───────────────────────────────────────────────────────────────────────
  titleHl: {
    color: color.TITLE_HIGHLIGH,
    ...font.style.h6
  },
  title: {
    ...font.style.h6,
    color: color.TITLE
  },
  titleColor: {
    ...font.style.h3,
    color: color.TITLE_COLOR,
    fontWeight: "900"
  },
  txt: {
    ...font.style.normal,
    color: color.TITLE
  },
  txtHl: {
    ...font.style.normal,
    color: color.TITLE_HIGHLIGH
  },
  desc: {
    ...font.desc,
    color: color.DESCRIPTION
  },
  descHl: {
    ...font.desc,
    color: color.SUBTITLE_HIGHLIGH
  },
  txtInput: {
    backgroundColor: color.INPUT_TEXT,
    flexDirection: "row",
    alignItems: "center"
  },

  // ─── BUTTON ─────────────────────────────────────────────────────────────────────
  btn: {
    padding: metric.MARGIN_XS,
    backgroundColor: color.BUTTON,
    elevation: 2,
    // borderRadius: 3,
    justifyContent: "center",
    flexDirection: "row"
  },

  btnHorizontal: {
    paddingVertical: metric.MARGIN_XXS,
    paddingHorizontal: metric.MARGIN,
    borderRadius: metric.BORDER_L,
  },

  // ─── SECTION ────────────────────────────────────────────────────────────────────
  sec: {
    // margin: metric.MARGIN_S,
    // padding: metric.MARGIN_S,
  },

   // ─── BORDER ─────────────────────────────────────────────────────────────────────
  border: {
    borderRadius: metric.BORDER_RADIUS_L,
    borderColor: color.BORDER,
    borderWidth: metric.BORDER,
  },
  borderLeft: {
    borderLeftColor: color.LINE_BORDER,
    borderLeftWidth: metric.BORDER_S,
  },
  borderRight: {
    borderRightColor: color.LINE_BORDER,
    borderRightWidth: metric.BORDER_S,
  },
  borderTop: {
    borderTopColor: color.LINE_BORDER,
    borderTopWidth: metric.BORDER_S,
  },
  borderBottom: {
    borderBottomColor: color.LINE_BORDER,
    borderBottomWidth: metric.BORDER_S,
  },

  // ─── CARD ───────────────────────────────────────────────────────────────────────
  card: {
    padding: metric.MARGIN_XS
  },

  cardRow: {
    margin: metric.MARGIN_XS,
    marginBottom: metric.MARGIN_XXS,
    marginTop: 0,
    backgroundColor: color.CARD
  },
  msgBubble: {
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: color.MESSAGE_ME,
    padding: metric.MARGIN_XS,
    borderRadius: metric.BORDER_L
  },

  // ─── OTHER ──────────────────────────────────────────────────────────────────────
  fullDevice: {
    position: "absolute",
    top: 0,
    left: 0,
    width: metric.DEVICE_WIDTH,
    height: metric.DEVICE_HEIGHT
  },

};

export default ApplicationStyles
