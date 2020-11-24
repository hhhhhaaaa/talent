import React, { Component } from 'react';
import './index.scss';
import UserBadge from '../userBadge/index.jsx';

export default class UserGallery extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Learners</h2>
        <div className="learner-image-container">
          <UserBadge data={this.data} />
        </div>
      </div>
    );
  }
}
