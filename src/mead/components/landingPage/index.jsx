import React, { Component } from 'react';
import Projects from '../projects/index.jsx';
import UserBadge from '../../containers/collection/userBadge/index.jsx';
import Blurb from '../blurb/index.jsx';
import './index.scss';

const blurbInfo = { name: 'OUR LEARNERS', story: 'These are just a few of the many learners we have had here.' };

/* eslint-disable no-magic-numbers */
export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="about">
          <h2 className="about-title">TALENT</h2>
        </div>
        <div className="about-container">
          <img alt="A cute ghost with a 404 Page Not Found." src="/Page-Not-Found.jpg" className="about-image-container" />
          <div className="about-text">
            <h2>WHO WE ARE</h2>
            <p>
              Learners Guild is a 10 month experience that is open to anyone who wishes to make a start as a web
              developer. Both the Guild and the Learners themselves endeavor to find the best way to push the Learner&apos;s
              skills and experience forward, through many facets. Self-guided and staff-guided learning both are
              encouraged, with individual and team based projects, numerous online instructional videos, and one-on-one
              support meetings. The culture is something to behold, a beacon that each Learner can use to depend on,
              even past their time at the Guild. Overall, it strives to move the tech industry further by creating a
              wonderful opportunity for all its Learners to learn, find jobs, and be a rock in the ocean that is tech.
            </p>
          </div>
        </div>
        <div className="teal-triangle1">
          <h2 className="projects-title">PROJECTS</h2>
        </div>
        <div className="project-image-container">
          <div className="project-images">
            <Projects projects={this.projectsArray.slice(0, 4)} />
          </div>
          <div className="project-images">
            <Projects projects={this.projectsArray.slice(4, 8)} />
          </div>
        </div>
        <div className="teal-triangle2" />
        <div className="landing-page-learners">
          <Blurb info={blurbInfo} />
          <div className="learner-image-container">
            <UserBadge data={this.learnersArray} />
          </div>
        </div>
      </div>
    );
  }
}
