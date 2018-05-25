/*

  a bootstrap like style

*/
"use strict";

import { Platform } from "react-native";
import { color, font, metric, applicationStyle } from 'AppTheme'

var stylesheet = Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 5
    },
    error: {
      marginBottom: 5
    }
  },
  controlLabel: {
    normal: {
      marginBottom: 7,
      ...applicationStyle.desc,
      color: color.TITLE2,
      // fontWeight: '400',
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 7,
      ...applicationStyle.desc,
      color: color.error,
      // fontWeight: 'bold',

    }
  },
  helpBlock: {
    normal: {
      ...applicationStyle.desc,
      marginBottom: 2,
      fontSize: font.size.FONT_SIZE_XS,
    },
    // the style applie validation error occours
    error: {
      ...applicationStyle.desc,
      fontSize: font.size.FONT_SIZE_XS,
      color: color.error,
      marginBottom: 2

    }
  },
  errorBlock: {
    ...applicationStyle.desc,
    fontSize: font.size.FONT_SIZE_XS,
    marginBottom: 2,
    color: color.error,
  },
  textboxView: {
    normal: {},
    error: {},
    notEditable: {}
  },
  textbox: {
    normal: {
      borderColor: color.LINE_BORDER_ACTIVE,
    },
    // the style applied when a validation error occours
    error: {
      borderColor: color.error,
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: font.size.FONT_SIZE_XS,
      borderColor: color.LINE_BORDER,
      color: color.DESCRIPTION,
      // backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
    select: {
    normal: Platform.select({
      android: {
        paddingLeft: 7,
        color: color.TITLE,
      },
      ios: {}
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: color.error,
      },
      ios: {}
    })
  },
  pickerContainer: {
    normal: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: color.LINE_BORDER,
      borderWidth: 1
    },
    error: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: color.error,
      borderWidth: 1
    },
    open: {
      // Alter styles when select container is open
      borderColor: color.LINE_BORDER_ACTIVE,
    }
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    error: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    active: {
      borderBottomWidth: 1,
      borderColor: color.LINE_BORDER_ACTIVE,
    }
  },
  pickerValue: {
    normal: {
      fontSize: font.size.FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: font.size.FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: color.LINE_BORDER,
      borderWidth: 1
    },
    error: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: color.error,
      borderWidth: 1
    },
    open: {
      // Alter styles when select container is open
      borderColor: color.LINE_BORDER_ACTIVE,
    }
  },
  dateTouchable: {
    normal: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    error: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    active: {
      borderBottomWidth: 1,
      borderColor: color.LINE_BORDER_ACTIVE,
    }
  },
  dateValue: {
    normal: {
      color: color.TITLE,
      fontSize: font.size.FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: color.error,
      fontSize: font.size.FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  listLabel: {
    normal: {
      // marginBottom: 7,
      ...applicationStyle.desc,
      color: color.TITLE2,
      textDecorationLine: 'underline'
    },
    // the style applied when a validation error occours
    error: {
      // marginBottom: 7,
      ...applicationStyle.desc,
      color: color.error,
    }
  }
});

module.exports = stylesheet;
