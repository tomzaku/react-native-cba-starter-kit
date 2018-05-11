import React, { Component, } from 'react';
import { View, Text, Switch, StyleSheet, Button, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { CFFormInput, CFStatusNetwork, CFPhotoPicker, CFButton} from 'AppComponent';
import DatePicker from 'react-native-datepicker';
import SignatureCapture from 'react-native-signature-capture';
import { format } from 'AppUtil';
import { metric } from 'AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'; 
class DatePickerCustom extends Component {
  state = {
    isDateTimePickerVisible: false,
    // valueDisplay:
  };
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
  handleDatePicked = (date) => {
    const { onChange } = this.props;
    // onChange(date);
    // this.setState({
    // })
    onChange(date.toString())
    this.hideDateTimePicker();

  };
  render() {
    const { onPress, value, editable = true } = this.props;
    const formatedDate = format.getDateTime(value)
    return (
      <View>
        <CFFormInput isText onPress={!editable ? ()=>{}: this.showDateTimePicker} value={formatedDate} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}


export const renderDatePicker = ({ input: { onChange, ...restInput }}) => {
  return (
    <DatePickerCustom {...restInput} onChange={onChange} />
  )
  return (
    <View style={styles.datePickerInput}>
      <DatePickerCustom
        {...restInput}
       
      />
    </View>
  )
}
export const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <CFFormInput style={styles.input} onChangeText={onChange} {...restInput} />
}
export const renderInputStatus = ({ input: { onChange, ...restInput }, meta: { touched, error }}, onPress) => {
  return <CFFormInput isText onPress={onPress} style={styles.input} onChangeText={onChange} {...restInput} error={error} />
}
export const renderPhotoPickerCustom = ({ input: { onChange, ...restInput }}) => {
  return (
    <CFPhotoPicker pathImage={restInput.value} onChangeImage={(response) => onChange(response.uri)} />
  )
}
export const renderSwitch = ({ input: { onChange, ...restInput }}) => {
  return (
    <Switch
      {...restInput}
      onValueChange={onChange}
      // value={this.state.enableDirectInteract}
      onTintColor={'#ffba48'}
      thumbTintColor={'white'}
    />
  )
}
function renderSignImage(value, onChange) {
  return (
    <View>
      <Image
        style={styles.signature}
        source={{ uri: value }}
      />
      <TouchableOpacity onPress={() => onChange('')} style={{ flex: 1, alignItems: 'center' }}>
      <Icon name={'autorenew'} size={40} />
      </TouchableOpacity>

    </View>
  )
}

class SignDraw extends Component {
  saveSign = () => {
    this.sign.saveImage()
  }
  resetSign = () => {
    this.sign.resetImage();
  }
  onSaveEvent = (result, onChange) => {
    onChange(format.getFullPathDevice(result.pathName))
  }
  render() {
    const { input, onChange } = this.props;
    return (
      <View style={{ padding: metric.MARGIN }}>
        <SignatureCapture
          style={styles.signature}
          ref={ref => this.sign = ref}
          onSaveEvent={(result) => this.onSaveEvent(result, onChange)}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
        />
        <View style={styles.funcSign}>
          <CFButton
            title={'Clear'}
            onPress={this.resetSign}
            style={{ flex: 1, marginRight: metric.MARGIN_XXS }}
            warning
            leftComponent={()=> <Icon name={'clear'} size={20} color={'white'} />}
          />
          <CFButton
            title={'Save'}
            onPress={this.saveSign}
            style={{ flex: 1, marginLeft: metric.MARGIN_XXS }}
            primary
            leftComponent={()=> <Icon name={'save'} size={20} color={'white'} />}
          />
        </View>
      </View>
    )
  }
} 

export const renderSignatureCustom = ({ input: { onChange, ...restInput }}) => {
  if (restInput.value && restInput.value.length > 1) {
    return  renderSignImage(restInput.value, onChange)
  } else {
    return <SignDraw input={restInput} onChange={onChange}/>
  }
}

const styles = StyleSheet.create({
  signature: {
    // width: metric.DEVICE_WIDTH,
    height: 300,
    flex: 1,
  },
  header: {
    marginTop: metric.MARGIN_S,
    marginBottom: metric.MARGIN_S,
  },
  datePickerInput: {
    // ...stylesheet.textboxView.normal,
    // backgroundColor: 'red',
    marginLeft: metric.MARGIN,
    marginRight: metric.MARGIN,
    ...Platform.select({
      ios: {
        borderBottomColor: 'rgb(143, 143, 143)',
        borderBottomWidth: 1,
      },
      android: {
        borderBottomColor: 'rgb(143, 143, 143)',
        borderBottomWidth: 1,
      },
    }),
  },
  funcSign: {
    marginTop: metric.MARGIN_XXS,
    flexDirection: 'row',
    // height: 60,
  },
});