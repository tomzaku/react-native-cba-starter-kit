//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import TwoColumn from './TwoColumn';

import { AppStatusBar } from 'AppComponent';
import { AppToolBar } from 'AppComponent'

import styles from './style/TwoColumnTabletStyle'
import { metric, color, applicationStyle, font } from 'AppTheme';

// create a component
class TwoColumnTablet extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = ({ navigation }) => ({
    header: null,
  })
  renderLeftContainer = (minorNav) => {
    const { name ='', backgroundColor = color.NAV_HEADER, showIconBack=false } = this.props;
    const mainNavigation = this.props.navigation
    return (
      <View style={{ flex: 1 }}>
        <AppToolBar title={name} style= {{ backgroundColor }} showIconBack={showIconBack} navigation={mainNavigation}/>
        {this.props.leftComponent && this.props.leftComponent(mainNavigation, minorNav)}
      </View>
    );
  } 
  getRightProps() {
    return {}
  }
  render(){
    return (
      <View style={styles.container}>
        <TwoColumn
          {...this.props}
          leftComponent={this.renderLeftContainer} // Should be HOC
          idNavRight={this.props.idNavRight}
          rightProps={this.props.rightProps}
        />
      </View>
    )
  }
}

TwoColumnTablet.defaultProps = {
  idNavRight: 'HoldingPlaceHolder'
}
//make this component available to the app
export default TwoColumnTablet;
