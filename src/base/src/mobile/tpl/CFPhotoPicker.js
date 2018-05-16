//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';
import { image } from 'AppTheme';

// create a component

const options = {
  title: 'Take a picture',
  maxWidth: 500,
  maxHeight: 300
}

class CFPhotoPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarBase64: this.props.pathImage,
    };
  }
  // componentDidMount() {
  //   this. && this..play();
  // }
  renderPlacehoderPhoto = () => {
    return (
      <View style={styles.camera}>
        <Icon name={'camera-retro'} size={150} color={'#717171'} />
      </View>
    )
  }
  renderPhoto = () => {
    const { avatarBase64 } = this.state;
    return (
      <Image
        style={styles.camera}
        source={{ uri: avatarBase64 }}
      />
    )
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
  renderPhotoContainer() {
    if (this.state.avatarBase64) {
      return this.renderPhoto();
    }
    return this.renderPlacehoderPhoto();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onChangeImage}>
          {this.renderPhotoContainer()}
        </TouchableOpacity>
        {/* <AppButton
          onPress={this.onChangeImage}
          success
          large
          title={'Update photo'}
        /> */}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    // width: ThemeSpacing.DEVICE_WIDTH,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default CFPhotoPicker;
