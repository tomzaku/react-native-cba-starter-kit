//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import t from 'tcomb-form-native';
import { color, metric, font } from 'AppTheme';

import { AppButton } from 'AppComponent'

var Form = t.form.Form;
const Country = t.enums({
  'IT': 'Italy',
  'US': 'United States'
}, 'Country');

const Company = t.struct({
  name: t.String,
  phones: t.list(t.String) // a list of strings
});

var Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  rememberMe: t.Boolean,        // a boolean
  country: Country,
  birthDate: t.Date, // a date field
  company: Company
});

var options = {
  fields: {
    age: {
      error: 'Insert a number',
      help: 'How old are you?'
    },
    rememberMe: {
      help: 'If yes you will not login again'
    },
    birthDate: {
      error: 'Select the past',
      help: 'What is your birthday?'
    },
    country: {
      error: 'Select country',
      help: 'Where was you born'
    },
    company: {
      config: {
        icon: 'ios-home-outline'
      },
      fields: {
        phones: {
          label: 'Company\'s  Phone',
          config: {
            // addButtonLabel: 'New tag'
          },
        }
      }
    }
    // birthDate: {
    //   transformer: {
    //     format: (date) => 'new Date()'
    //   }
    // }
  }
}; // optional rendering options (see documentation)

// create a component
class FormScreen extends Component {
  onPress = () => {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    console.log('>>>>')
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <AppButton title={'SUBMIT'} success onPress={this.onPress} style={{ marginVertical: metric.MARGIN_L }}/>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
});

//make this component available to the app
export default FormScreen;
