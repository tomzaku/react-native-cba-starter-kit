/* @flow */

import React, { Component, PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
// import { HighPureComponent } from 'CFBaseComponents'
import { time } from 'AppUtil'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppAvatar } from 'AppComponent';
const ITEM_BLOCK_DELAY_MS = 500
import _ from 'lodash';
import { HighPureComponent } from 'AppBaseComponents';
import styles from './style/CFCardStyle'
import { metric, color, applicationStyle, font } from 'AppTheme';

export default class CFCard extends HighPureComponent {
  constructor(props){
    super(props);
    this.state = {
      selected: this.props.selected,
    }
  }
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log('>>>>>>>>>>>>>>>>>>',nextProps, this.props, nextProps === this.props)
  //   return false
  // }
  
  checkIfExistFunction(currentFunc, oldFunction){
    return currentFunc && !oldFunction 
  }

  componentWillReceiveProps = ({ selected }) => {
    this.setState({
      selected
    })
  }
  onPressItem = () => {
    time.pressItemGeneral(this.props.onPress, {delay: 400})
  }
  
  render() {
    const {
      title,
      subtitleUp,
      subtitleDown,
      avatar,
      onPress,
      containerStyle,
      containerSelectedStyle,
      // selected
      // id
    } = this.props;
    const { selected } = this.state;
    return (
      <TouchableOpacity
        onPress={this.onPressItem}
        disabled={onPress ? false : true}
        style={[
          styles.container, containerStyle,
          selected ? [styles.cardSelectedContainer, containerSelectedStyle] : {},
          ]}>
          <AppAvatar image={avatar} />
          <View style={styles.middleComponent}>
            <Text style={[
              styles.title,
              selected ? styles.selectedTitle : {}
            ]}>
              {title}
            </Text>
            <Text style={[
              styles.subtitleUp,
              selected ? styles.selectedSubtitleUp : {}
            ]}>
              {subtitleUp}
            </Text>
            <Text style={[
              styles.subtitleDown,
              selected ? styles.selectedSubtitleDown : {}
            ]}>
              {subtitleDown}
            </Text>
          </View>
          <Icon
            color={selected ? color.ICON_HIGHLIGHT : color.ICON}
            name="navigate-next"
            size={metric.ICON}
          />
      </TouchableOpacity>
    );
  }
}
CFCard.defaultProps = {
  selected: false,
}
CFCard.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  subtitleUp: PropTypes.string,
  subtitleDown: PropTypes.string,
  avatar: PropTypes.any,
  onPress: PropTypes.func,
  containerStyle: PropTypes.any,
};
