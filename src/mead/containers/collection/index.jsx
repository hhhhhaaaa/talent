import React, { Component } from 'react';
import './index.scss';
import UserGallery from './userGallery/index.jsx';
import Projects from '../../components/projects/index.jsx';
import Blurb from '../../components/blurb/index.jsx';

export default class CollectionPage extends Component {
  render() {
    return (
      <div>
        <div className="flex-column-search-page">
          <Blurb className="col-lg-1 pagination-center" info={this.info} />
          <UserGallery data={this.data} />
        </div>
        <h2 className="text-center">Projects</h2>
        <Projects projects={this.projects} />
        <div className="footer-filler" />
      </div>
    );
  }
}
