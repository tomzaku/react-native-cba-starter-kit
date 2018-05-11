//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { metric, applicationStyle } from 'AppTheme';

// create a component


class CFDrawer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  renderBody = (data) => {
    return data.map(({ icon, onPress, label, desc }) => (
      <TouchableOpacity onPress={onPress} style={styles.rowRoute} key={icon}>
        <Ionicons name={icon} style={styles.icon} size={30} color={'white'} />
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </TouchableOpacity>
    ));
  }
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        {this.renderBody(data)}
      </View>
    );
  }
}
CFDrawer.defaultProps = {
  data: [
    {
      icon: 'md-create',
      onPress: () => {},
      label: 'Edit Profile',
    },
  ]
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f64be',
  },
  rowRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: metric.MARGIN_XS,
    paddingLeft: metric.MARGIN,
  },
  icon: {
    marginRight: metric.MARGIN_S,
  },
  label: {
    ...applicationStyle.title,
    // flex: 1,
  },
  desc: {
    ...applicationStyle.desc,
  },
});

//make this component available to the app
export default CFDrawer;
