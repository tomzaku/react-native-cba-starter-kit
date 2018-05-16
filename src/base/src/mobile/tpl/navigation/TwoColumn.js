/**
* @providesModule TwoColumn
*/

// import liraries

import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { CFPlaceholder } from 'AppComponent'
import _ from 'lodash';
import getStackNavigator from '@conf/navigation/index';
import styles from './style/TwoColumnStyle'
// create a component
class TabletNavigation extends Component {
  constructor(props) {
    super(props);
    this.FindRightNavigation = getStackNavigator(this.props.idNavRight);
    this.state = {
      rightNav: {
      },
    };
  }
  componentDidMount = () => {
    this.setState({ rightNav: this.rightNav })
  }
  render() {
    const { navigation, leftComponent, rightProps={} } = this.props;
    // let LeftComponent = FindComponent.tabletScreen ? FindComponent.tabletScreen : FindComponent.screen;
    const RightComponent = this.FindRightNavigation;
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {leftComponent(this.state.rightNav)}
        </View>
        <View style={styles.rightContainer}>
          <RightComponent
            style={{ marginTop: -10 }}
            ref={rightNav =>{this.rightNav = rightNav;}}
            initialRouteName={this.props.idNavRight}
            // {...this.props} // Navigation props cannot work
            screenProps={rightProps}
          />
        </View>
      </View>
    );
  }
}
TabletNavigation.defaultProps = {
  idNavRight: 'HoldingPlaceHolder',
};
// define your styles


// make this component available to the app
export default TabletNavigation;
