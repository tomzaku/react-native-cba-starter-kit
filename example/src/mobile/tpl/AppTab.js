//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux'

import TabBar from './component/TabBar'

// create a component
class AppTab extends Component {
  render() {
    const keyLangs = this.props.children.map(child => child.props.keyLang)
    return (
      <ScrollableTabView
        renderTabBar={() => <TabBar keyLangs={keyLangs} />}
      >
        {this.props.children}
      </ScrollableTabView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

const mapStateToProps = (state, props) => ({
  language: state.app.language
})
const AppTabRedux = connect(mapStateToProps)(AppTab)

//make this component available to the app
export default AppTabRedux;
