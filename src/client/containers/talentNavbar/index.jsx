import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { startLoading, fetchLearners, doneLoading } from '../../actions';
import axios from 'axios';

class TalentNavbar extends Component {

  componentWillMount() {
    this.props.startLoading();
    axios.get('/api/learners')
    .then(response => response.data)
    .then(data => this.props.fetchLearners(data))
    .then(() => this.props.doneLoading());
  }

  render() {
    return (
      <div>
        <Navbar className="navbar" fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <ul className="navbar-nav list-group">
                <li className="nav-item list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item list-group-item">
                  <Link to="/current">Current</Link>
                </li>
                <li className="nav-item list-group-item">
                  <Link to="/alumni">Alumni</Link>
                </li>
                <li className="nav-item list-group-item">
                  <Link to="/learners">All Learners</Link>
                </li>
                <li className="nav-item list-group-item">
                  <Link to="/skills">Search By Skills</Link>
                </li>
              </ul>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startLoading, fetchLearners, doneLoading }, dispatch);
}

export default connect(null, mapDispatchToProps)(TalentNavbar);