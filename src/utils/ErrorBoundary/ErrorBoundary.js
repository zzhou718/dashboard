import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMsg: ''
  }
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMsg: error
    });
    console.error(error);
  }
  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMsg}</h1>;
    } else {
      return this.props.children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
