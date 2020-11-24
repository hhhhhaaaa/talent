import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    console.error(error, info);
  }

  render() {
    if (this.hasError) {
      return <img alt="Pictured is a server rack, with a kitten hanging off of the wires jutting out from the servers." src="https://c1.staticflickr.com/8/7001/6509400855_aaaf915871_b.jpg" />;
    }

    return this.children;
  }
}
