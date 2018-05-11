# About

  It's will help us create reducer automaticly. 

# Options

  type: string (will create action by type)
  group: string (Ex: 'FULL', will related to rule property)
  rule: array (Ex: ['UPDATE_ALL'], array of rules of reducer)
  initialState: Object
  reducer: Function

# Usage

Example patient: 

``` js
const patientOptions = {
  type: 'patient',
  rule: ['UPDATE_ALL']
}
const patientReducerFactory = reducerFactory(patientOptions)
```
