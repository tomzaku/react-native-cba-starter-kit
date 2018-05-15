//import liraries
import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';

import { IconTextInput, Button, Icon } from 'AppComponent'
import { metric, color, applicationStyle, font } from "AppTheme";
// import KeyboardSpacer from 'react-native-keyboard-spacer';
// import firebase from 'react-native-firebase';


import styles from './style/TodoBaseStyle'
// create a component

class ItemCard extends PureComponent {
  renderMoveDoing = () => {
    return (
      <Icon name={'ios-arrow-dropright-outline'} color={'white'} size={metric.ICON_S} />
    )
  }
  render() {
    const { onPressButtonRight,onPressRemoveButton, disableRightIcon, item } = this.props;
    const { name, status } = item;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={'ios-trash-outline'} onPress={() => onPressRemoveButton && onPressRemoveButton(item)} />
            <Text style={styles.itemTitle}>
              {name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {disableRightIcon ? null : <Button
               title={'doing'}
               primary
               style={styles.buttonNext}
               rightComponent={this.renderMoveDoing}
               rounded
               onPress={() => onPressButtonRight && onPressButtonRight(item)}
               />
            }
            {/* <Button title={''}/> */}
          </View>
        </View>
      </View>
    )
  }
}

class TodoBase extends PureComponent {
  constructor() {
    super();
    // this.ref = firebase.firestore().collection('todo');
    // this.unsubscribe = null;

  }
 
  componentDidMount() {
    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
  }

  renderItem = ({ item, index }) => {
    return null;
    // const { name, status } = item;
    // const { onPressButtonRight, onPressRemoveButton, disableRightIcon } = this.props;
    // return (
    //   <ItemCard
    //     item={item}
    //     onPressButtonRight={onPressButtonRight}
    //     onPressRemoveButton={onPressRemoveButton}
    //     disableRightIcon={disableRightIcon}
    //   />
    // )
  }
  submitTodo = (name) => {
    // console.log('submitTodo', name)
    // this.props.dispatch(application.addTodo(name))
    this.props.submitTodo && this.props.submitTodo(name)
  }
  renderFooter() {
    return (
      <IconTextInput onPress={this.submitTodo}/>
    );
  }
  keyExtractor = (item={}, index) => {
    return `${item.id}${index}${item.status}`
  }
  render() {
    const { todo } = this.props
    return (
      <KeyboardAvoidingView style={styles.container}>
        {/* <Text>TodoTab</Text> */}
        <FlatList
          data={todo}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          // ListFooterComponent={this.renderFooter}
          style={{ flex: 1 }}
        />
        {this.renderFooter()}
        {/* <AppKeyboardSpacer /> */}
      </KeyboardAvoidingView>
    );
  }
}


//make this component available to the app
export default TodoBase;
