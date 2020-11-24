import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <p> Page Not Found</p>
        <img alt="A ghost showing a 404 error." src="/Page-Not-Found.jpg" />
        <div className="footer-filler" />
      </div>
    );
  }
}
