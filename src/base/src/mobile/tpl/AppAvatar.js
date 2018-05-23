/* @flow */

import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground, Platform } from 'react-native';
// import FastImage from 'react-native-fast-image';
import { compare } from 'AppUtil'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style/AppAvatarStyle'
import { metric, color, applicationStyle, font, image as imageResource} from 'AppTheme';

class AppAvatar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isImageLoaded: false,
    }
  }
  componentWillReceiveProps(nextProps) {
    return false;
  }

  _renderIconEditor({ editorButton, size }) {
    // ToDo: handle each size and render proper button
    if (!editorButton) return null;
    return (
      <View style={[styles.editComponent, { width: size - metric.BORDER_RADIUS * 2, height: size / 2 - metric.BORDER_RADIUS, bottom: size / 2, marginBottom: -( size / 2 - metric.BORDER_RADIUS)}, ]}>
        <View style={{ height: size / 4, backgroundColor: 'transparent', flex: 1 }}></View>
        <View style={styles.edit}>
          <Icon name={'md-create'} style={{}} size={20} color={'white'} />
        </View>
      </View>
    )
  }
  render() {
    let { onPress, size, image, style, editorButton, backgroundColorBehindBorder, large } = this.props;
    const { isImageLoaded } = this.state;
    // const isImageWeb = image && image.uri && image.uri.match('http');
    image = image && image.uri ? image : imageResource.avatar;
    //check image is local or not
    const ImageRender = Image;
    // const ImageRender = Image;
    // const visible = isImageLoaded || !isImageWeb;
    size = large ? metric.AVATAR_L : size
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}
        disabled={onPress ? false : true}
        >
        <ImageRender
          source={image}
          style={[
            {
              height: size,
              width: size,
              borderRadius: size / 2,
            },
            styles.avatar,
          ]}
        >
        </ImageRender>
        {this._renderIconEditor(this.props)}
      </TouchableOpacity>
    );
  }
}

AppAvatar.propTypes = {
  size: PropTypes.number,
  image: PropTypes.any,
  editorButton: PropTypes.any,
  style: PropTypes.any,
  backgroundColorBehindBorder: PropTypes.string,
};

AppAvatar.defaultProps = {
  size: metric.AVATAR,
  image: imageResource.avatar,
  backgroundColorBehindBorder: 'white',
};
export default AppAvatar;

