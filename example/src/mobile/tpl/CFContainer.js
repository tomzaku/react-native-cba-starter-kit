/* @flow */

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { CFStatusBar, CFToolBar, CFTabContainer } from 'AppComponent';

export default class CFContainer extends PureComponent {
  _renderTab() {
    const { onChangeTab } = this.props;
    if (!Array.isArray(this.props.children) || this.props.children.length < 2) {
      return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {this.props.children}
        </View>
      );
    }
    return (
      <CFTabContainer onChangeTab={onChangeTab}>
        {this.props.children}
      </CFTabContainer>
    );
  }
  render() {
    const {
      leftItem,
      title,
      rightItem,
      navigator,
      besideRightItem,
      styleToolBar,
      // styleStatusBar
    } = this.props;
    return (
      <View style={[styles.container, this.props.style]}>
        <CFStatusBar />
        <CFToolBar
          leftItem={leftItem}
          title={title}
          rightItem={rightItem}
          besideRightItem={besideRightItem}
          navigator={navigator}
          styleToolBar={styleToolBar}
        />
        {this._renderTab()}
      </View>
    );
  }
}

CFContainer.propTypes = {
  leftItem: PropTypes.string,
  title: PropTypes.string,
  rightItem: PropTypes.object,
  navigator: PropTypes.any,
  besideRightItem: PropTypes.object,
  styleToolBar: PropTypes.object,
  style: PropTypes.any,
  children: PropTypes.node,
  onChangeTab: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
