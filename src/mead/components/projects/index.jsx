import React, { Component } from 'react';
import './index.scss';

export default class Projects extends Component {
  render() {
    return this.projects.map(project => (
      <span key={project.id}>
        <a href={project.link} target="__blank">
          <img alt="Display of project." className="project-image" src={project.title} />
        </a>
      </span>
    ));
  }
}
