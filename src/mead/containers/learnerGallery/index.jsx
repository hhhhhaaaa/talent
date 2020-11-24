import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import CollectionPage from '../collection/index.jsx';
import { searchBySkill, searchByName } from '../../actions/index.jsx';

class LearnerGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnersByType: this.determineSubsetOfLearners(this.type),
      searchBar: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch(event) {
    if (this.guild.nameSearch) {
      this.searchBySkill();
    } else {
      this.searchByName();
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ searchBar: event.target.value });
  }

  filterByName() {
    const filteredLearner = this.determineSubsetOfLearners(this.type);

    if (!this.searchBar) {
      return filteredLearner;
    }
    let searchTerm = this.selectedLearners.toLowerCase().split();
    let learnersBySkill = this.filterByOneSkill(searchTerm);

    const searchBar = this.searchBar.toLowerCase().split(' ')[0];
    const foundLearners = filteredLearner.filter(learner => {
      return learner.name.toLowerCase().includes(searchBar);
    });

    return foundLearners;
  }

  determineSubsetOfLearners(type) {
    if (type) {
      return this.filterByType(type);
    }
    {
      const searchSkills = this.match.params.searchSkill.replace(/search=/u, '').split(',');

      return this.filterByMultipleSkills(searchSkills);
    }
  }

  filterByOneSkill(skillToSearchBy) {
    return this.learnersByType.filter(learner => {
      const skillKeys = Object.values(learner.skills).map(object => object.skills);

      let lowerCaseSkillKeys = skillKeys.map(key => key.toLowerCase());

      for (let i = 0; i < lowerCaseSkillKeys.length; i++) {
        if (lowerCaseSkillKeys[i].includes(skillToSearchBy)) {
          return learner;
        }
      }
    });
  }

  filterByMultipleSkills(searchArray) {
    return this.guild.learners.filter(learner => {
      const skillKeys = Object.values(learner.skills).map(object => object.skills);

      let lowerCaseSkillKeys = skillKeys.map(key => key.toLowerCase());

      for (let i = 0; i < searchArray.length; i++) {
        if (lowerCaseSkillKeys.includes(searchArray[i].toLowerCase())) {
          if (i + 1 === searchArray.length) {
            return learner;
          }
        } else {
          break;
        }
      }
    });
  }

  filterByType(type) {
    if (type === 'all') {
      return this.guild.learners;
    }

    return this.guild.learners.filter(learner => {
      if (type === 'alumni') {
        return learner.alumni === true;
      }
      if (type === 'current') {
        return learner.alumni === false;
      }
    });
  }

  getProjects(learners) {
    const allProjects = learners.map(learner => learner.projects);

    return _.flatMapDeep(allProjects);
  }

  render() {
    let names = this.learnersByType;

    if (this.guild.nameSearch) {
      names = this.filterByName(this.searchBar);
    } else {
      names = this.filterByOneSkill(this.searchBar);
    }

    return (
      <div>
        <div>
          <input type="text" placeholder="search..." results="0" onChange={this.handleChange} />
          <br />
          <label>
            <input type="radio" name="searchBy" onChange={this.toggleSearch} checked={this.guild.nameSearch} />{' '}
            Name
          </label>
          <label>
            <input type="radio" name="searchBy" onChange={this.toggleSearch} checked={this.guild.skillSearch} />{' '}
            Skill
          </label>
        </div>

        <CollectionPage
          data={names}
          info={{ name: 'ABOUT LEARNERS GUILD', story: 'This is just a sentence.' }}
          projects={this.getProjects(names)}
        />
      </div>
    );
  }
}

function mapStateToProps({ guild }) {
  return { guild };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchByName, searchBySkill }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnerGallery);
