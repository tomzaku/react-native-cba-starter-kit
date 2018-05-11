// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { ThemeColor, ThemeSpacing } from 'AppTheme';
import { CFLine } from 'AppComponent';
import ElementAlphabet from './component/ElementAlphabet';
import styles from './style/AppAlphabetStyle';

const SHOW_ALL_TEXT = 'ALL';
const LIST_ALPHABET = [
  SHOW_ALL_TEXT,
  '#',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

class AppAlphabet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dataSource: ds.cloneWithRows(LIST_ALPHABET),
      data: LIST_ALPHABET.map((item, index) => {
        if (this.props.defaultValue === item) { return { id: index, title: item, pressed: true }; }
        return { id: index, title: item, pressed: false };
      }),
    };
  }

  componentWillReceiveProps({ defaultValue }) {
    this.setState({
      data: LIST_ALPHABET.map((item, index) => {
        if (defaultValue === item) { return { id: index, title: item, pressed: true }; }
        return { id: index, title: item, pressed: false };
      }),
    });
  }

  _onPressItem = (item, index) => {
    const { onPressItem } = this.props;
    if (item === SHOW_ALL_TEXT) {
      item = '';
    }
    onPressItem(item);
  }

  _renderRow = ({
    item,
    index,
  }, sectionID) => {
    let { defaultValue } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.onPressItem && this._onPressItem(item.title, index)}
        style={[styles.textItemComponent,
          item.title === defaultValue
          ? styles.textItemComponentSelected
          : {}
          ]}
      >
        <Text style={[
          styles.textItem,
          item.title === defaultValue
            ? styles.textItemSelected
            : {}
          ]}
        >
          {item.title}
        </Text>

      </TouchableOpacity>

    );
  }

  _renderBody() {
    let { defaultValue } = this.props;
    if (defaultValue === '') { defaultValue = SHOW_ALL_TEXT; }
    return this.state.data.map(({
      title,
    }, index) => (<ElementAlphabet
      key={`elementAlphabet-${title}`}
      isPressed={title === defaultValue}
      onPress={() => this._onPressItem(title)}
      title={title}
    />));
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <ScrollView
            style={{
              flex: 1,
            }}
            horizontal
            automaticallyAdjustContentInsets={false}
          >
            {this._renderBody()}

          </ScrollView>
        </View>
        <CFLine style={styles.line} />
      </View>
    );
  }
}

AppAlphabet.propTypes = {
  defaultValue: PropTypes.string,
  onPressItem: PropTypes.func,
};

AppAlphabet.defaultProps = {
  defaultValue: SHOW_ALL_TEXT,
};

export default AppAlphabet;
