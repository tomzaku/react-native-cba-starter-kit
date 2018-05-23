//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { metric, color, applicationStyle, font, animation } from 'AppTheme';

// create a component
class CFStatusNetwork extends PureComponent {
  render() {
    const { isFetching, ok, message, visible } = this.props;
    if ( !visible ) return null;
    if (isFetching) {
      return (
          <View style={[styles.statusMessage, { height: 40 }]}>
            <ActivityIndicator size="small" color="#00ff00" />
            <Text style={{ marginLeft: metric.MARGIN_S, color: 'white' }}>
              Waitting!
            </Text>
          </View>
        );
    } else {
      if (ok) {
        return (
          <View style={[styles.statusMessage, { backgroundColor: '#006400', height: 40 }]}>
            {/* <Spinner color={'white'} type={'FadingCircleAlt'} size={20} /> */}
            <View style={{ width: 40, height: 30 }}>
              {/* <Animation
                ref={(animation) => { this.animation = animation; }}
                style={{
                  width: 50,
                  height: 30,
                }}
                source={animation.success}
              /> */}
            </View>
            <Text style={{ color: 'white' }}>
              {message || 'Successful!'}
            </Text>
          </View>
        );
      }
      else {
        return (
          <View style={[styles.statusMessage, { backgroundColor: '#bb2003' }]}>
            <Icon name={'error'} size={25} color={'white'} />
            <Text style={{ color: 'white', flex: 1, textAlign: 'center' }}>
              {message || 'Error'}
            </Text>
          </View>
        );
      }
    }
    
  }
}

CFStatusNetwork.propTypes = {
  status: PropTypes.string,
  error: PropTypes.string,
};

// define your styles
const styles = StyleSheet.create({
  statusMessage: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: color.NAV_HEADER,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metric.MARGIN_XS,

  },
});

//make this component available to the app
export default CFStatusNetwork;
