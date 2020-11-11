import React, { Component } from 'react';
import './index.scss';

export default class Projects extends Component {
  render() {
    return this.props.projects.map((project) => {
      return (
        <span key={project.id}>
          <a href={project.link} target="__blank">
            <img className="project-image" src={project.title}></img>
          </a>
        </span>
      );
    });
  }
}
