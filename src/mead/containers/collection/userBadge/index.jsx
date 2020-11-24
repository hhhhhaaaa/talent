import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class UserBadge extends Component {
  render() {
    return this.data.map(learner => {
      <span key={learner.id} className="learner-span">
        <Link to={`/learners/${learner.github_handle}`}>
          <img alt="Display of learner." className="img-responsive" src="/LearnerImage.png" />
          {' '}
        </Link>
        <p className="text-center">{learner.name}</p>
      </span>;
    });
  }
}
