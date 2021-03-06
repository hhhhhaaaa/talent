﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './index.scss';

export default class TalentNavbar extends Component {
  render() {
    return (
      <div className="talent-container">
        <Navbar className="talent-navbar" fixedtop="true">
          <Navbar.Brand>
            <input type="checkbox" name="hamburger" id="hamburger" />
            <label htmlFor="hamburger" className="navbar-icon glyphicon glyphicon-menu-hamburger" />
            <h2 className="navbar-title">TALENT</h2>
            <div className="talent-list">
              <ul className="talent-nav">
                <li className="talent-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="talent-item">
                  <Link to="/current">Current</Link>
                </li>
                <li className="talent-item">
                  <Link to="/alumni">Alumni</Link>
                </li>
                <li className="talent-item">
                  <Link to="/learners">All Learners</Link>
                </li>
                <li className="talent-item">
                  <Link to="/skills">Search By Skills</Link>
                </li>
              </ul>
            </div>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
