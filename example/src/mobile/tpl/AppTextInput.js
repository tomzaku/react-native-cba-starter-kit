//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { metric, color, applicationStyle, font } from "AppTheme";
import styles from './style/AppTextInputStyle';

// create a component
class IconTextInput extends Component {
  state = {
    text: ''
  }
  onChangeText = (text) => {
    this.setState({
      text,
    })
    this.props.onChangeText()
  }
  onPress = () => {
    const { onPress } = this.props;
    const { text } = this.state;
    onPress && onPress(text)
  }
  renderIconRight = () => {
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.button}>
        <View style={{flex: 1, paddingHorizontal: metric.MARGIN_XS, ...applicationStyle.center }}>
          <Icon name={"md-send"} size={metric.ICON} color={color.ICON} style={styles.icon} />
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.textInputComponent}>
        <TextInput style={styles.input} {...this.props} onChangeText={this.onChangeText} />
        {this.renderIconRight()}
      </View>
    );
  }
}

IconTextInput.defaultProps = {
  onChangeText: () => {}
}

//make this component available to the app
export default IconTextInput;
