//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color, metric } from 'AppTheme';

// create a component
class SwitchState extends Component {
  constructor(props) {
    super(props);
    const { states, currentState } = this.props;
    let currentStateIndex
    states.map((state, index) => {
      if(state === currentState) {
        currentStateIndex = index
      }
    })

    this.state = {
      currentStateIndex,
    }
  }
  onPressBackIcon = () => {
    const { currentStateIndex } = this.state;
    if (this.checkPreviousStatus()) {
      this.setState({
        currentStateIndex: currentStateIndex - 1,
      })
    }
  }
  onPressNextIcon = () => {
    const { states } = this.props;
    const { currentStateIndex } = this.state;
    if (this.checkNextStatus()) {
      this.setState({
        currentStateIndex: currentStateIndex + 1,
      })
    }
  }
  checkNextStatus = () => {
    const { states } = this.props;
    const { currentStateIndex } = this.state;
    if (currentStateIndex < states.length - 1) {
      return true
    }
    return false
  }
  checkPreviousStatus = () => {
    const { currentStateIndex } = this.state;
    if (currentStateIndex > 0) {
      return true
    }
    return false
  }
  render() {
    const { states, currentState } = this.props;
    const { currentStateIndex } = this.state;
    return (
      <View style={styles.container}>
        <Icon
          color={this.checkPreviousStatus() ? 'white' : ThemeColor.info}
          size={30}
          name={'ios-arrow-back'}
          onPress={this.onPressBackIcon}
          style={styles.arrow}
        />
        <Text style={[styles.state, states[currentStateIndex] === currentState ? {color: ThemeColor.warning} : {}]}>{states[currentStateIndex]}</Text>
        <Icon
          color={this.checkNextStatus() ? 'white' : ThemeColor.info}
          size={30}
          name={'ios-arrow-forward'}
          onPress={this.onPressNextIcon}
          style={styles.arrow}

        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
    flexDirection: 'row',
    backgroundColor: color.info,
  },
  arrow:{
    // backgroundColor: 'red',
    paddingLeft: metric.MARGIN_XS,
    paddingRight: metric.MARGIN_XS,
    backgroundColor: color.info,
    // borderRadius: 20,
  },
  state: {
    color: 'white',
    // marginLeft: metric.MARGIN_XS,
    // marginRight: metric.MARGIN_XS,
    minWidth: 80,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
SwitchState.defaultProps = {
  state: [''],
  currentState: '',
}
//make this component available to the app
export default SwitchState;
