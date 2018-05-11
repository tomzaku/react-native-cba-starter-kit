// Compare even a function
import React, { Component } from 'react';
// create a component
import { compare } from 'AppUtil'

class HighPureComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !compare.isEqualObjectIncludeFunction(nextProps,this.props) || !compare.isEqualObjectIncludeFunction(nextState,this.state);
  }
}

// make this component available to the app
export default HighPureComponent;
