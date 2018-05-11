import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { color, metric, font } from 'AppTheme';

const Style = {
  textbox: {
    normal: {
      color: color.INPUT_TEXT,
      ...font.style.normal,
      height: 45,
    },
  },
  textboxView: {
    normal: {
      marginLeft: metric.MARGIN,
      marginRight: metric.MARGIN,
      ...Platform.select({
        ios: {
          borderBottomColor: color.BORDER_LINE,
          borderBottomWidth: 1,
        },
        android: {
          borderBottomColor: color.BORDER_LINE,
          borderBottomWidth: 1,
        },
      }),
    },
  },
  controlLabel: {
    normal: {
      marginLeft: metric.MARGIN,
      marginRight: metric.MARGIN,
      marginTop: metric.MARGIN,
      color: color.LABEL_TEXT_INPUT,
      fontSize: 13,
    },
  },
};

export default Style;
