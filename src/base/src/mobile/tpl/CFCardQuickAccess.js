//import liraries
import React, { PureComponent, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppAvatar } from 'AppComponent'
// import { HighPureComponent } from 'CFBaseComponents'
import { metric, color, font, applicationStyle } from 'AppTheme'
import _ from 'lodash'
// create a PureComponent
import IconIonic from 'react-native-vector-icons/Ionicons';

import { baseModuleHelper } from 'AppUtil'
import { HighPureComponent } from 'AppBaseComponents';
import Swipeout from 'react-native-swipeout';

class CFCardQuickAccess extends HighPureComponent {
  renderBody() {
    const { onPressContainer, title, subtitle, status, detailStatus, onPressQuickAccess, textQuickAccess=`Next\nState` } = this.props;
    return (
      <TouchableOpacity
        style={[styles.encounterCard]}
        onPress={onPressContainer}
      >
        <View style={[{flexDirection: 'row', alignItems: 'center', padding: metric.MARGIN_S}]}>
          <AppAvatar style={{marginRight: metric.MARGIN_XS}} />
          <View>
            <Text style={styles.title}>
            {title}
            </Text>
            <Text style={{ color: 'white' }}>
              {subtitle}
            </Text>
            <View>
              <Text style={styles.statusItemText}>
                <Text style={{fontWeight: 'bold'}}>
                {`${status}`}
                </Text>
                <Text style={{fontWeight: '200'}}>
                  {` | ${detailStatus}`}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity 
          style={{ backgroundColor: color.STATUSBAR, alignItems: 'center', justifyContent: 'center', paddingLeft: metric.MARGIN, paddingRight: metric.MARGIN }}
          onPress={onPressQuickAccess}
        >
          <IconIonic
            name={'ios-arrow-dropright'}
            size={25}
            color={'white'}
            // style={{backgroundColor: 'red', width: 10, height: 10}}
            />
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: 'white'}}>
            {textQuickAccess}
          </Text>
        </TouchableOpacity>
        
      </TouchableOpacity>
    )
  }
  render() {
    const swipeoutBtns = [() =>
      <View>
        <Text>
          Next State
        </Text>
      </View>
    ]
    return (
      <Swipeout right={swipeoutBtns}>
        {this.renderBody()}
      </Swipeout>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  title: {
    ...applicationStyle.title,
    color: 'white'
  },
  encounterCard: {
    backgroundColor: color.NAV_HEADER,
    // padding: metric.MARGIN_XS,
    // margin: metric.MARGIN_XS,
    marginBottom: 0,
    marginTop: metric.MARGIN_XXS,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  statusItemText: {
    color: 'white',
  },
});

//make this component available to the app
export default CFCardQuickAccess;
