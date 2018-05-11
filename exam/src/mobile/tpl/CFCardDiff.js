/* @flow */

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { color, metric, font, applicationStyle } from 'AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

// data = [{title:'Name',before:'Abx2',after:'Abx'},
// {title:'Major',before:'Emergency',after:'Duty Doctor'}]

export default class CFCardDiff extends PureComponent {
  render() {
    const { title, textRight, data, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={{
          flex: 1,
        }}
        >
          <Text style={styles.title}>{title}</Text>
          {data.map((eachData, index) => (
            <View style={styles.rowDataComponent} key={`CardDiff-${eachData.title}`}>
              <Text style={styles.titleRowData}>{eachData.title}:</Text>
              <Text>{eachData.before}</Text>
              <Icon name={'play-arrow'} style={styles.iconRowData} />
              <Text>{eachData.after}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.textRight}>{textRight}</Text>
      </View>
    );
  }
}

CFCardDiff.propTypes = {
  title: PropTypes.string,
  textRight: PropTypes.string,
  data: PropTypes.array,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    padding: metric.MARGIN_S,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  title: {
    ...applicationStyle.txt
  },
  rowDataComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRowData: {
   ...applicationStyle.desc,
  },
  textRight: {
  ...applicationStyle.desc,
  },
});
