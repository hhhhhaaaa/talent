import React, { Component } from 'react';

export default class Blurb extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>{this.info.name}</h1>
        <p>{this.info.story}</p>
      </div>
    );
  }
}
