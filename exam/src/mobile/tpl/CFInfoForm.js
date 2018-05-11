/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  InteractionManager,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { metric } from 'AppTheme';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { CFHeader } from 'AppComponent';
import styles from './style/CFInfoFormStyle';

class CFInfoForm extends PureComponent {
  constructor(props) {
    super(props);
  }
  renderItem = ({ item }) => {
    let { text, data } = item;
    const { fetched } = this.props;
    // console.log('TEXT,', text, typeof(text), data)
    
    // At least have one data to render the text on the right column
    if (data.length < 1) {
      data = [null]
    }
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.titleRow}>
          {text}
        </Text>
        <View style={styles.columnRight}>
          {
            data.map((eachData, index) => (
              <ShimmerPlaceHolder
              key={`text-${eachData}-${index}`}
              widthLine={170}
              height={19.5}
              autoRun
              style={{ marginBottom: metric.MARGIN_XS }}
              visible={fetched}
            >
              <Text style={styles.text}>
                {eachData || '_'}
              </Text>
            </ShimmerPlaceHolder>
            ))
          }
         
        </View>
      </View>
   
    )
  }
  render() {
    const { iconTitle, title, data, onPressEdit } = this.props;
    return (
      <View style={styles.container}>
        <CFHeader title={title} icon={iconTitle} onPress={onPressEdit} />
        <View style={styles.body}>
          {/* {data.map((eachData, index) => this.renderRow(eachData, index))} */}
          <FlatList
             data={data}
             keyExtractor={({text}, index) => `${text}-${index}`}
             renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

CFInfoForm.propTypes = {
  fetched: PropTypes.bool,
  iconTitle: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.array,
  onPressEdit: PropTypes.func,
};
CFInfoForm.defaultValue = {
  fetched: false,
};
export default CFInfoForm;
