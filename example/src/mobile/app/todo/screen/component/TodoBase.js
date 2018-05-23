//import liraries
import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { IconTextInput, AppButton, AppIcon, AppTextInput } from 'AppComponent'
import { metric, color, applicationStyle, font } from "AppTheme";
import { todo as todoReselect } from 'AppReselect'
import { theme } from 'AppUtil'

import TodoBaseStyle from './style/TodoBaseStyle'
// create a component

class ItemCard extends PureComponent {
  renderMoveDoing = () => {
    const { isLocal } = this.props 
    return (
      <AppIcon name={isLocal ? 'ios-cloud-upload-outline' : 'ios-arrow-dropright-outline'} color={color.ICON_HIGHLIGHT} size={metric.ICON_S} style={{ marginLeft: metric.MARGIN_XS }}/>
    )
  }
  render() {
    const { onPressButtonRight,onPressRemoveButton, nextStatus, disableRightIcon, item, styles } = this.props;
    const { name, status } = item;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <AppIcon name={'ios-trash-outline'} onPress={() => onPressRemoveButton && onPressRemoveButton(item)} />
            <Text style={styles.itemTitle}>
              {name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {disableRightIcon
              ? null
              : <AppButton
               title={nextStatus}
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
const mapStateToProps = (state, props) => {
  return {
    // item: state.todo.entities.data[props.id],
    // isLocal: true,
    ...todoReselect.getItemSelector(state, props),
    styles: theme.getStyle(TodoBaseStyle, state.app.theme),

  }
}
const ItemCardRedux = connect(mapStateToProps)(ItemCard)

class TodoBase extends PureComponent {
  constructor() {
    super();

  }
 
  componentDidMount() {
  }

 
  renderItem = ({ item, index }) => {
    // return null;
    // const { name, status } = item;
    const { nextStatus, onPressButtonRight, onPressRemoveButton, disableRightIcon } = this.props;
    return (
      <ItemCardRedux
        // item={item}
        id={item}
        nextStatus={nextStatus}
        onPressButtonRight={onPressButtonRight}
        onPressRemoveButton={onPressRemoveButton}
        // disableRightIcon={disableRightIcon}
      />
    )
  }
  submitTodo = (name) => {
    // console.log('submitTodo', name)
    // this.props.dispatch(application.addTodo(name))
    this.props.submitTodo && this.props.submitTodo(name)
  }
  renderFooter() {
    return (
      <AppTextInput onPress={this.submitTodo}/>
    );
  }
  keyExtractor = (item={}, index) => {
    return `${item.id}${index}${item.status}`
  }
  render() {
    const { todo, styles } = this.props
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
const mapStateTodoBase = (state, props) => ({
  styles: theme.getStyle(TodoBaseStyle, state.app.theme)
})

//make this component available to the app
export default connect(mapStateTodoBase)(TodoBase);
