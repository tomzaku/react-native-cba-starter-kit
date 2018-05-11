/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { StyleSheet } from 'react-native';
import { metric, color, applicationStyle, font } from 'AppTheme';

class CFTabContainer extends React.PureComponent {

  render() {
    const {
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarActiveTextColor,
      tabBarUnderlineStyle,
      tabBarTextStyle,
      onChangeTab,
    } = this.props;
    return (
      <ScrollableTabView
        tabBarBackgroundColor={tabBarBackgroundColor}
        tabBarActiveTextColor={tabBarActiveTextColor}
        tabBarInactiveTextColor={tabBarInactiveTextColor}
        onChangeTab={onChangeTab}
        tabBarUnderlineStyle={tabBarUnderlineStyle}
        tabBarTextStyle={tabBarTextStyle}
        // style={{ elevation: 3 }}
      >
        {this.props.children}
      </ScrollableTabView>
    );
  }
}

CFTabContainer.propTypes = {
  tabBarBackgroundColor: PropTypes.string,
  tabBarInactiveTextColor: PropTypes.string,
  tabBarActiveTextColor: PropTypes.string,
  onChangeTab: PropTypes.func,
  children: PropTypes.node,
};

CFTabContainer.defaultProps = {
  tabBarBackgroundColor: color.TAB,
  tabBarActiveTextColor: color.TAB_TITLE_SELECTED,
  tabBarInactiveTextColor: color.TAB_TITLE,
  tabBarUnderlineStyle: {
    backgroundColor: color.TAB_UNDERLINE,
  },
  tabBarTextStyle: {
    // ...applicationStyle.txtHl
    // ...applicationStyle.title,
    // color: color.TITLE_HIGHLIGH,
    ...metric.h6,
  }
};

export default CFTabContainer;
