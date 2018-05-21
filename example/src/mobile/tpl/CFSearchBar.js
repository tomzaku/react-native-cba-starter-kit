/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Animated,
  
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { metric, color, applicationStyle, font } from 'AppTheme';
import { connect } from 'react-redux'

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
import styles from './style/CFSearchBarStyle'

class CFSearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      enableSearchType: false,
      typeCurrent: this.props.listType[0],
      text: this.props.defaultValue,
    };

    this.spinValue = new Animated.Value(0);
  }
  onPressType = (item) => {
    console.log('Item', item)
    if (this.props.onChangeType) {
      this.props.onChangeType(item);
    }
    this.setState({
      typeCurrent: item,
    });
    this._switchSearchType();
  }
  _renderTypeList = ({item, index}) => {
    const { label, key } = item;
    const onPressType = () => this.onPressType(item)
    return (
      <TouchableOpacity
        onPress={onPressType}
      >
        <Text
          style={key !== this.state.typeCurrent.key ? styles.textType : styles.textTypeSelected}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
  componentWillReceiveProp({ defaultValue }) {
    this.setState({ text: defaultValue });
  }
  _animateSearchType(statusBegin, statusEnd) {
    this.spinValue.setValue(statusBegin);
    Animated.timing(
      this.spinValue,
      {
        toValue: statusEnd,
        duration: 375,
      },
    ).start();
    this.setState({
      enableSearchType: !this.state.enableSearchType,
    });
  }

  _switchSearchType = () => {
    const statusBegin = this.state.enableSearchType ? 1 : 0;
    const statusEnd = this.state.enableSearchType ? 0 : 1;
    this._animateSearchType(statusBegin, statusEnd);
  }

  _onChangeTextSearchField = (text) => {
    this.setState({ text });
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  }
  _keyExtractor = (item, index) => {
    return item.key
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ['0deg', '90deg', '360deg'],
    });
    const { styleContainer, listType } = this.props;
    const { enableSearchType, typeCurrent, text} = this.state;
    console.log('>>>>', typeCurrent)
    return (
      <View style={[styles.header, styleContainer]}>
        <Icon
          name={'search'}
          size={metric.ICON}
          color={color.ICON}
        />
        {!enableSearchType &&
        <TextInput
          placeholder="Search"
          defaultValue={text}
          placeholderTextColor={'#c4c4c4'}
          style={styles.searchBar}
          onChangeText={this._onChangeTextSearchField}
          {...this.props}
        />}
        {enableSearchType &&
        <FlatList
          data={listType}
          renderItem={this._renderTypeList}
          horizontal
          centerContent
          keyExtractor={this._keyExtractor}
        />}
        {!enableSearchType &&
          <TouchableOpacity onPress={this._switchSearchType}>
            <Text style={styles.filterTypeText}>{typeCurrent.label}</Text>
          </TouchableOpacity>
        }
        <AnimatedIcon
          style={{
            backgroundColor: 'transparent',
            marginLeft: metric.MARGIN,
            transform: [{ rotate: spin }],
          }}
          onPress={this._switchSearchType}
          name={'filter-list'}
          size={metric.ICON}
          color={color.ICON}
        />
      </View>
    );
  }
}

CFSearchBar.propTypes = {
  listType: PropTypes.array,
  defaultValue: PropTypes.string,
  onChangeType: PropTypes.func,
  onChangeText: PropTypes.func,
};

CFSearchBar.defaultProps = {
  listType: ['_'],
  defaultValue: '',
};

export default CFSearchBar;
