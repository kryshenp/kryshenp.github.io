// the name of this component is up to you

import React, { Component } from 'react';

class ErrorBoundary extends Component {
// i only want to return h1 if I got an error so I create a state,
// which is one of a reasons why we use clsss here

  state = {
    hasError: false,
    errorMessage: ''
  }
// add a new method which receives an error and some info passed into it
// authomatically by React

  componentDidCatch = (error, info) => {
// we set the state
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
