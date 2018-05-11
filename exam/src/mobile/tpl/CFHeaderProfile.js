/* @flow */

import React, { PureComponent, Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeColor, ThemeSpacing } from 'AppTheme';
import { CFButton, AppAvatar } from 'AppComponent';

import { HighPureComponent } from 'AppBaseComponents';
import styles from './style/CFHeaderProfileStyle'

export default class CFHeaderProfile extends HighPureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  componentWillReceiveProps(nextProps) {
    // console.log('<<<<<<<<<<<<<componentWillReceiveProps', nextProps, this.props)
  } 
  renderButton() {
    const { buttons = [] } = this.props
    if ( buttons.length < 1 ) return null;
    return (
      <View style={styles.row}>
        {
          buttons.map((item) => (
           <CFButton style={{ marginLeft: 3, marginRight: 3}} backgroundColor={'white'} styleText={styles.textHeader} {...item}/>
          ) )
        }
        {/* <CFButton title={'Detail'} style={{flex: 1}} /> */}
      </View>
    )
  }
  renderRightComponent() {
    const { renderRightComponent } = this.props;
    if (renderRightComponent) return renderRightComponent()
    else return this.renderButton()
  }
  render() {
    let { titleUp, titleDown, avatar, titleMiddle, style, onPressTitleUp } = this.props;
    titleUp = titleUp || '_';
    // titleDown = titleDown
    //   ? titleDown
    //   : "AF"
    titleMiddle = titleMiddle || '_';
    return (
      <View style={[styles.header, style]}>
        <View style={styles.headerInfo}>
          <AppAvatar image={avatar}/>
          <View style={styles.infoTextComponent}>
            <TouchableOpacity onPress={onPressTitleUp}>
              <Text style={styles.name}>
                {titleUp}
              </Text>
            </TouchableOpacity>
            {titleMiddle
              ? (
                <Text style={styles.major}>
                  {titleMiddle}
                </Text>
                )
              : null
              }
            {titleDown
              ? (
                <Text style={styles.phone}>
                  {titleDown}
                </Text>
                )
              : null
              }
          </View>
            {this.renderRightComponent()}
        </View>
      </View>
    );
  }
}

CFHeaderProfile.propTypes = {
  titleUp: PropTypes.string,
  titleDown: PropTypes.string,
  avatar: PropTypes.any,
  titleMiddle: PropTypes.string,
  style: PropTypes.any,
};
