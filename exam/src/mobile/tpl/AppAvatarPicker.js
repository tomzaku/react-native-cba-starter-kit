import React, { PureComponent } from 'react';

import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';

import { AppAvatar, CFButton } from 'AppComponent';
import { View, Text, StyleSheet } from 'react-native';

import styles from './style/AppAvatarPickerStyle'
import { metric, color, applicationStyle, font } from 'AppTheme';

const options = {
  title: 'Take a picture',
  maxWidth: 400,
  maxHeight: 400
}

// create a component
class AppAvatarPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatarBase64: this.props.pathImage,
    };
  }
  onChangeImage = () => {
    const { onChangeImage } = this.props;
    ImagePicker.showImagePicker(options, (response) => {
      if (onChangeImage) {
        onChangeImage(response);
      }
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // let source = { uri: response.uri };
        let avatarBase64 = `data:image/png;base64,${response.data}`;
        this.setState({
          avatarBase64,
        });
      }
    });
  }
  render() {
    const { avatarBase64 } = this.state;
    const { style, withoutButton, size=metric.AVATAR_XXL } = this.props;
    return (
      <View style={[styles.container, style]}>
        <AppAvatar
          size={size}
          style={styles.avatar}
          editorButton
          image={{ uri: avatarBase64 }}
          onPress={this.onChangeImage} 
        />
        {
          withoutButton
          ? null
          : <CFButton title={'UPDATE IMAGE'} style={styles.buttonUpdateImage} onPress={this.onChangeImage} />
        }
      </View>
    );
  }
}

AppAvatarPicker.propTypes = {
  onChangeImage: PropTypes.func,
}


//make this component available to the app
export default AppAvatarPicker;
